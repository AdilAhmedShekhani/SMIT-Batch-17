# Use official Node.js image
FROM node:18

# Set working directory (use absolute path)
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]