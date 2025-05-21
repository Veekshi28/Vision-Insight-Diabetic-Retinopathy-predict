
# 🧠 VisionInsight – AI-Powered Diabetic Retinopathy Detection

> **VisionInsight** is a comprehensive AI-powered solution designed to detect the severity of diabetic retinopathy from retinal fundus images. Leveraging a trained deep learning model, it classifies images into five categories ranging from *No_DR* to *Proliferative_DR*, enabling early and accurate diagnosis of one of the leading causes of blindness. 

The system integrates a FastAPI backend and a React-based frontend, providing a seamless and responsive user experience. Users can simply upload a retinal image and receive instant predictions on disease severity. VisionInsight is fully deployed on Microsoft Azure, ensuring scalability, security, and reliable performance. This lightweight diagnostic tool aims to support clinicians and improve patient outcomes through smart, automated screening.


---

## 📌 Table of Contents
- [📂 Dataset Overview](#-dataset-overview)
- [🧠 Model Training Pipeline](#-model-training-pipeline)
- [⚙️ Backend Architecture](#️-backend-architecture)
- [🌐 Frontend Application](#-frontend-application)
- [☁️ Azure Services Used](#-azure-services-used)
- [🚀 Deployment Workflow](#-deployment-workflow)

---

## 📂 Dataset Overview

- **Source**: [Kaggle - Diabetic Retinopathy Detection 2019](https://www.kaggle.com/competitions/diabetic-retinopathy-detection)

- **Classes**:
  - `0`: No_DR (No Diabetic Retinopathy)
  - `1`: Mild
  - `2`: Moderate
  - `3`: Severe
  - `4`: Proliferative_DR

Each image was preprocessed to a size of 224×224 and organized into class-wise folders. Labels were provided via a CSV mapping file.

---

## 🧠 Model Training Pipeline

The model was trained on the Kaggle platform using the EfficientNet-B0 architecture available via the `timm` library. Data preprocessing and augmentation were handled using Albumentations, with techniques such as resizing, flipping, brightness adjustments, and affine transforms. To address class imbalance, the training pipeline used a weighted sampler and implemented focal loss for robustness. Hyperparameters such as learning rate and weight decay were tuned using Optuna, with the best model achieving high validation accuracy and saved as `best_model.pth`.

---

## ⚙️ Backend Architecture

The backend of the project was developed using FastAPI — a lightweight and high-performance Python framework. The backend handles incoming image requests, applies necessary preprocessing, loads the trained model, and performs prediction. It accepts an image through a single POST endpoint `/predict` and responds with a predicted class label. The entire backend was containerized using Docker, making it easy to deploy on Azure Container Apps.

---

## 🌐 Frontend Application

The frontend was built using React, styled with TailwindCSS, and bundled using Vite. It offers a minimal and interactive interface where users can upload retina images, trigger prediction, and view results instantly. The interface is responsive, fast, and styled with modern design practices. Once built, the frontend was deployed using Azure Static Web Apps, allowing global accessibility and fast load times via CDN.

---

## ☁️ Azure Services Used

VisionInsight was fully deployed on Azure, utilizing three core services in a meaningful and production-oriented way:

| Azure Service | Purpose | Why It’s Critical |
|---------------|---------|-------------------|
| **Azure Container Registry (ACR)** | Stores Docker image of FastAPI backend | Enables secure, private, and fast deployment of containers inside Azure |
| **Azure Container Apps** | Hosts FastAPI backend as a serverless REST API | Auto-scales on demand, exposes HTTP endpoints with SSL, zero infra overhead |
| **Azure Static Web Apps** | Hosts React frontend with global CDN support | Provides CI/CD, free SSL, fast delivery and zero server setup |

These services eliminated the need for managing virtual machines or manual orchestration, allowing a highly scalable and cost-efficient ML deployment.

---

## 🚀 Deployment Workflow

The project was deployed in two parts: backend and frontend.

The backend was containerized using Docker and pushed to Azure Container Registry. From there, the image was deployed to Azure Container Apps using Azure CLI. This provided a serverless API hosting environment that auto-scales and is publicly accessible via HTTPS.

For the frontend, after building the React project locally using Vite, the build folder was uploaded to Azure Static Web Apps using the static web app deployment token. This hosted the frontend through Azure’s global CDN, offering fast and secure access across regions.

