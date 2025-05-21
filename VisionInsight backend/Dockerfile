FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

COPY . /app
WORKDIR /app

RUN pip install --no-cache-dir torch==2.0.1 timm==0.9.2 albumentations==1.3.1 opencv-python-headless==4.9.0.80 numpy==1.26.4

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "80"]
