# Use the official Node.js image as the base image
FROM node:18.15.0-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Expose port 8080
EXPOSE 3000

# Serve the build
CMD ["npx", "serve", "-s", "build"]