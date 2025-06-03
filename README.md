
```markdown
# 🚀 Automated CI/CD Pipeline for Dockerized Application using GitHub Actions & Deployment to AWS ECS

## 📌 Project Overview

This project implements an automated CI/CD pipeline that builds, tests, and deploys a Dockerized application to **Amazon ECS** using **GitHub Actions**. The goal is to eliminate manual deployment steps and ensure reliable, continuous integration and deployment.

---

## 🧰 Tech Stack

- **GitHub Actions** – for CI/CD automation
- **Docker** – containerization of the application
- **Amazon Elastic Container Registry (ECR)** – to store Docker images
- **Amazon Elastic Container Service (ECS)** – to deploy Docker containers
- **AWS IAM Policies** – for secure access to ECS and ECR

---

## 📂 Project Structure

```

.
├── app/                         # Application code
│   └── Dockerfile               # Dockerfile to build the app
├── .github/
│   └── workflows/
│       └── ci-cd.yml            # GitHub Actions workflow
├── ecs-task-definition.json     # ECS task definition for deployment
├── README.md
└── screenshots/                 # Screenshots of deployment

````

---

## ⚙️ CI/CD Pipeline Flow

1. ✅ Code is pushed to GitHub
2. 🐳 GitHub Actions builds Docker image
3. 📦 Docker image is pushed to Amazon ECR
4. 🚀 GitHub Actions deploys the new image to ECS Fargate
5. 🔄 ECS automatically updates the running service

---

## 🔐 IAM Policies Used

To successfully interact with **Amazon ECR** and **ECS** from **GitHub Actions**, we attached the following **IAM policies** to the GitHub OIDC role or EC2 IAM role:

### ✅ Policy 1: AmazonEC2ContainerRegistryFullAccess

Allows pushing Docker images to Amazon ECR.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:PutImage",
        "ecr:InitiateLayerUpload",
        "ecr:UploadLayerPart",
        "ecr:CompleteLayerUpload"
      ],
      "Resource": "*"
    }
  ]
}
````

### ✅ Policy 2: AmazonECS\_FullAccess

Allows GitHub Actions to update ECS services and task definitions.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecs:RegisterTaskDefinition",
        "ecs:UpdateService",
        "ecs:DescribeServices",
        "ecs:DescribeTaskDefinition"
      ],
      "Resource": "*"
    }
  ]
}
```

---

## 📋 ECS Task Definition

A JSON-based file named `ecs-task-definition.json` is used to define:

* Docker image URI from ECR
* CPU and memory configurations
* Port mappings
* Logging configuration

---

## 🧪 Testing

The GitHub Actions workflow includes:

* ✅ Linting (syntax checks)
* ✅ Docker image build
* ✅ Push to ECR
* ✅ Deployment to ECS

---


## 🔧 How to Run Locally

```bash
# Step 1: Clone the repo
git clone https://github.com/AbdullahTayyab003/react-ecs-pipeline.git
cd fyp-cicd-ecs

# Step 2: Build the Docker image
docker build -t my-app .

# Step 3: Run the container
docker run -p 8080:80 my-app
```

---

## 📈 Future Improvements

* Add automated rollback on ECS task failure
* Add security scanning using Trivy or Snyk
* Add staging environment before production

---

## 👨‍🎓 Author

**Abdullah**
Final Year Student – Bachelors in Computer Science
GitHub: [@AbdullahTayyab003](https://github.com/AbdullahTayyab003)

``
