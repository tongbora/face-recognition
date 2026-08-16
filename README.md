# Face Recognition System

A Streamlit web application for face verification. The app compares a reference face image with a second face image, generates ArcFace embeddings, calculates cosine similarity, and decides whether both images belong to the same person.

## Live Demo

https://face-recognition-ai.streamlit.app/

## Source Code

https://github.com/danadorn/face-recognition/

## Overview

The user enters a reference name, provides Image A as the reference face, and provides Image B as the face to check. Each image can be uploaded or captured from the camera.

The app detects the main face in both images, extracts a 512-dimensional identity embedding from each face using ArcFace ResNet100, then compares both embeddings. If the similarity score is greater than or equal to `0.70`, the app displays the reference name. Otherwise, it returns `NOT MATCH`.

## Features

- Upload or camera-scan two face images
- Detect faces with OpenCV Haar Cascade
- Select the largest detected face as the main identity region
- Generate normalized ArcFace embeddings with OpenVINO
- Compare embeddings using cosine similarity
- Show detected face bounding boxes
- Display similarity score, threshold, embedding size, and final decision
- Automatically download required model files on first run

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Python | Main application logic |
| Streamlit | Web interface |
| OpenCV | Image decoding and Haar Cascade face detection |
| OpenVINO | ArcFace ONNX model loading and CPU inference |
| ArcFace ResNet100 | 512-dimensional face embedding model |
| NumPy | Vector normalization and cosine similarity |

## How It Works

1. The user enters a reference name.
2. The user provides Image A and Image B by upload or camera capture.
3. OpenCV detects faces in both images.
4. The app selects the largest face from each image.
5. Each face is resized to `112 x 112` and converted into the ArcFace input format.
6. OpenVINO runs ArcFace inference and returns normalized embeddings.
7. NumPy calculates cosine similarity with a dot product.
8. The app compares the score against the `0.70` threshold.
9. The result modal shows `MATCH` with the reference name, or `NOT MATCH`.

## Decision Rule

```python
similarity = float(np.dot(embedding_a, embedding_b))

if similarity >= 0.70:
    result = reference_name
else:
    result = "NOT MATCH"
```

## Key Functions

- `load_models()` - downloads missing assets, loads Haar Cascade, and compiles ArcFace with OpenVINO.
- `detect_main_face(image)` - detects faces and returns the largest face crop with its bounding box.
- `preprocess_arcface(face_bgr)` - converts a detected face into the tensor shape ArcFace expects.
- `get_face_embedding(face)` - runs inference and normalizes the identity vector.
- `process_face_image(image_rgb)` - runs the shared detection and embedding pipeline.
- `verify_stored_faces(face_a, face_b)` - compares processed embeddings and builds the verification result.

## Project Files

```text
.
├── app.py
├── README.md
├── requirements.txt
├── .gitignore
├── models/
└── stored-faces/
```

`models/` is created automatically and stores downloaded model files. `stored-faces/` is prepared as a runtime folder, but the current implementation does not permanently store user face data.

## Run Locally

Clone the source repository:

```bash
git clone https://github.com/danadorn/face-recognition.git
cd face-recognition
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the app:

```bash
streamlit run app.py
```

Open the local app:

```text
http://localhost:8501
```

On the first run, the app downloads the Haar Cascade XML file and ArcFace ONNX model automatically.

## Limitations

- Works best with clear, front-facing face images.
- Uses the largest detected face when multiple faces are present.
- The fixed `0.70` threshold may need tuning for different image conditions.
- Lighting, blur, face angle, and occlusion can affect the result.
- This is a verification app, not a face database identification system.
