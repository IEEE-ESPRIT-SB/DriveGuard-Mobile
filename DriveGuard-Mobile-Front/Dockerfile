# Use the official Node image with a specific version
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port used by your React Native app
EXPOSE 19000
EXPOSE 19001

# Start the React Native packager
CMD ["npm", "start"]