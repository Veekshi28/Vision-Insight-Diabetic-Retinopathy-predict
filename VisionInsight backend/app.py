from fastapi import FastAPI, UploadFile, File
import torch
import timm
import albumentations as A
from albumentations.pytorch import ToTensorV2
import cv2
import numpy as np
import logging

app = FastAPI()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

model = timm.create_model('tf_efficientnet_b0', pretrained=False, num_classes=5)
model.load_state_dict(torch.load("best_model.pth", map_location="cpu"))
model.eval()

transform = A.Compose([
    A.Resize(224, 224),
    A.Normalize(mean=(0.485, 0.456, 0.406), std=(0.229, 0.224, 0.225)),
    ToTensorV2()
])

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    npimg = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    if img is None:
        logger.error("Image decode failed")
        return {"error": "Invalid image"}

    augmented = transform(image=img)
    img_tensor = augmented["image"].unsqueeze(0)

    with torch.no_grad():
        outputs = model(img_tensor)
        _, predicted = torch.max(outputs, 1)

    class_names = ['No_DR', 'Mild', 'Moderate', 'Severe', 'Proliferative_DR']
    prediction = class_names[predicted.item()]
    logger.info(f"Prediction: {prediction}")
    return {"prediction": prediction}
