from flask import Flask, request, jsonify
from scipy.spatial import distance
from imutils import face_utils
import dlib
import cv2
import numpy as np

app = Flask(__name__)

thresh = 0.25  # Adjust this threshold based on sensitivity for drowsiness detection
detect = dlib.get_frontal_face_detector()
frame_check = 20
predict = dlib.shape_predictor("models/shape_predictor_68_face_landmarks.dat")

(lStart, lEnd) = face_utils.FACIAL_LANDMARKS_68_IDXS["left_eye"]
(rStart, rEnd) = face_utils.FACIAL_LANDMARKS_68_IDXS["right_eye"]


def eye_aspect_ratio(eye):
    """
    Calculates the eye aspect ratio for a given set of eye landmark points.

    Args:
        eye: An array of 6 points representing the eye landmarks.

    Returns:
        The calculated eye aspect ratio.
    """
    A = distance.euclidean(eye[1], eye[5])
    B = distance.euclidean(eye[2], eye[4])
    C = distance.euclidean(eye[0], eye[3])
    ear = (A + B) / (2.0 * C)
    return ear


@app.route("/detect", methods=["POST"])
def detect_drowsiness():
    """
    Analyzes an uploaded image for drowsiness based on eye aspect ratio.

    Returns:
        JSON response indicating "Drowsy" or "Not Drowsy".
    """
    try:
        # Get frame data from request
        frame_data = request.files["image"].read()
        frame = cv2.imdecode(np.frombuffer(frame_data, np.uint8), cv2.IMREAD_COLOR)

        # Detect faces in the frame
        subjects = detect(frame)
        print(subjects)
        # Check if any face is detected
        if len(subjects) == 0:
            return jsonify({"message": "No face detected."})

        # Analyze only the first detected face
        for subject in subjects:
            # Convert the face region to grayscale for eye analysis
            gray = cv2.cvtColor(frame[subject.top():subject.bottom(), subject.left():subject.right()], cv2.COLOR_BGR2GRAY)

            # Predict facial landmarks
            shape = predict(gray, subject)
            shape = face_utils.shape_to_np(shape)

            # Extract eye landmarks
            leftEye = shape[lStart:lEnd]
            rightEye = shape[rStart:rEnd]

            # Calculate eye aspect ratio for both eyes
            leftEAR = eye_aspect_ratio(leftEye)
            rightEAR = eye_aspect_ratio(rightEye)

            # Calculate average eye aspect ratio
            ear = (leftEAR + rightEAR) / 2.0
            print(ear)
            
            # Determine drowsiness based on the threshold
            if ear < thresh:
                return jsonify({"message": "Drowsy","ear": ear})
            else:
                return jsonify({"message": "Not Drowsy", "ear": ear})
    except Exception as e:
        return jsonify({"error": "Invalid image format or corrupted data."}), 400


if __name__ == "__main__":
    app.run(debug=True)