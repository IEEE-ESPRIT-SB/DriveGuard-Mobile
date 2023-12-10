# Drive Guardian Mobile App

Welcome to the Drive Guardian mobile application, built with React Native and Expo Go.

## Project Overview

Drive Guardian is a mobile application designed to enhance road safety through innovative features leveraging AI, Computer Vision, and IoT. The app provides users with advanced functionalities, including face recognition, alert management, and personalized notifications.

## Project Structure

```plaintext
C:.
|   .dockerignore
|   .gitignore
|   App.js
|   app.json
|   babel.config.js
|   Dockerfile
|   GlobalStyles.js
|   package-lock.json
|   package.json
|   server.json
|
+---assets
|   |   ... (various images and icons)
|   \---images
|       |   ... (additional images organized by category)
|
+---components
|   |   DayCard.js
|   |   Input.js
|   |   SignInForm.js
|   |   SignUpForm.js
|   |   StatCard.js
|
+---layouts
|   |   AuthLayout.js
|
+---screens
|   |   Alert.js
|   |   ApprFaceID.js
|   |   Auth.js
|   |   DecFaceID.js
|   |   FaceID.js
|   |   GetStarted.js
|   |   Home.js
|   |   index.js
|   |   notif.js
|   |   Profile.js
|
\---stacks
    |   AuthStack.js
    |   MainStack.js
```

## Folder Descriptions

- **`assets`:** Contains various assets such as images, icons, and splash screens.
  - **`images`:** Organized image assets by category for easy access.

- **`components`:** Reusable React Native components used across different screens.

- **`layouts`:** Layout components that define the structure and organization of screens.

- **`screens`:** React Native screen components that make up different parts of the application.
  - **`Alert.js`:** Screen for viewing and responding to alerts.
  - **`ApprFaceID.js`:** Screen for approving Face ID.
  - **`Auth.js`:** Authentication-related screens.
  - **`DecFaceID.js`:** Screen for declining Face ID.
  - **`FaceID.js`:** Screen related to Face ID functionality.
  - **`GetStarted.js`:** Initial screen for getting started.
  - **`Home.js`:** Main functionality of the Drive Guardian app.
  - **`notif.js`:** Screen for notifications.
  - **`Profile.js`:** User profile information.

- **`stacks`:** Configuration files for navigation stacks in the app.
  - **`AuthStack.js`:** Stack configuration for authentication-related screens.
  - **`MainStack.js`:** Stack configuration for the main app screens.

## Design Prototype

Explore the Figma design to visualize the app's user interface and interactions.



[![Figma Design](https://img.shields.io/badge/Figma-Design-orange?logo=figma)](https://www.figma.com/file/Es0ZrCX41DHifc1nCXB3Wn/RAS-Challenge?type=design&node-id=56%3A500&mode=dev )


## Features

- **Face Recognition:** Secure authentication using facial recognition technology.
- **Alert Management:** View and respond to real-time alerts and notifications.
- **Personalized Notifications:** Receive customized notifications based on user preferences.
- **User Profile:** Access and update user profile information.

## Video Prototype

Watch a brief video prototype showcasing the app's key features and user interactions.

[![Drive Guardian Video Prototype](https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_FILE_ID_HERE)](https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID_HERE/view)


## Getting Started

Follow these steps to run the Drive Guardian mobile app locally:

1. **Install Dependencies:**
    ```bash
    npm install
    ```

2. **Start Expo Development Server:**
    ```bash
    npm start
    ```

3. **Run on Android/iOS Device:**
    - Download the Expo Go app from [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) or [App Store](https://apps.apple.com/us/app/expo-go/id982107779).
    - Scan the QR code provided by the Expo development server using the Expo Go app.

4. **Explore the App:**
    - The app is organized into different screens accessible through the bottom tab navigation.

