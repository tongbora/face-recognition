export const navItems = ["Overview", "Stack", "Models", "Workflow", "Decision", "Functions", "Setup"] as const;

export const stackItems = [
  { name: "Python", purpose: "Application logic", logo: "python" },
  { name: "Streamlit", purpose: "Interactive web interface", logo: "streamlit" },
  { name: "OpenCV", purpose: "Image decoding and Haar Cascade detection", logo: "opencv" },
  { name: "OpenVINO", purpose: "ArcFace model loading and CPU inference", logo: "openvino" },
  { name: "ArcFace ResNet100", purpose: "512-dimensional identity embeddings", logo: "arcface" },
  { name: "NumPy", purpose: "Cosine similarity and vector normalization", logo: "numpy" },
] as const;

export type StackLogoName = (typeof stackItems)[number]["logo"];

export const modelItems = [
  {
    stage: "Stage 1 — Detection",
    name: "Haar Cascade",
    tagline: "Finds where the face is.",
    description: "Scans the image for face-like patterns and draws a box around the largest match.",
    points: ["Looks for eyes, nose, and cheekbone patterns", "Checks multiple scales for face size", "Fast and CPU-friendly"],
    output: "Cropped face region (bounding box)",
  },
  {
    stage: "Stage 2 — Recognition",
    name: "ArcFace (ResNet100)",
    tagline: "Turns a face into an identity.",
    description: "Converts the cropped face into a 512-number fingerprint for that person.",
    points: ["Resizes face to 112 x 112 pixels", "Deep ResNet100 network extracts features", "Same person → similar vectors"],
    output: "512-d normalized identity embedding",
  },
] as const;

export const workflowItems = [
  {
    step: "01",
    title: "Input",
    body: "The user enters a reference name, then provides Image A and Image B from upload or camera capture.",
  },
  {
    step: "02",
    title: "Detect",
    body: "OpenCV locates faces with Haar Cascade and selects the largest face as the primary identity region.",
  },
  {
    step: "03",
    title: "Embed",
    body: "Each cropped face is resized to 112 x 112 and converted into a normalized ArcFace vector.",
  },
  {
    step: "04",
    title: "Compare",
    body: "The two normalized embeddings are compared with a dot product that acts as cosine similarity.",
  },
  {
    step: "05",
    title: "Decide",
    body: "A score at or above 0.70 displays the reference name. A lower score returns NOT MATCH.",
  },
] as const;

export const keyFunctions = [
  ["load_models()", "Downloads missing assets, loads Haar Cascade, and compiles ArcFace with OpenVINO."],
  ["detect_main_face(image)", "Finds faces and returns the largest crop with its bounding box."],
  ["preprocess_arcface(face_bgr)", "Converts a detected face into the tensor shape ArcFace expects."],
  ["get_face_embedding(face)", "Runs inference and normalizes the 512-value identity vector."],
  ["process_face_image(image_rgb)", "Runs the shared detection and embedding pipeline for any input source."],
] as const;
