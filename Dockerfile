# Stage 1: Build the React application
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose port for application web
EXPOSE 3000

# Command to start application
CMD ["npm", "run", "dev"]