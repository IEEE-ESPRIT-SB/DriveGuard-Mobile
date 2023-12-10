# Use an official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Expo CLI globally
RUN npm install -g expo-cli

# Set CI environment variable to bypass interactive prompts
ENV CI=1

# Copy the entire application to the container
COPY . .

# Expose the port that Expo will run on
EXPOSE 19000

# Start Expo on the specified network without waiting for http://localhost:8081
CMD ["npm", "start", "--", "--tunnel"]
