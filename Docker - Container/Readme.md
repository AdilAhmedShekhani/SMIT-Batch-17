# 🚀 Introduction to Docker

## 1. Why Containers?

Before Docker, applications were deployed directly on servers. This caused problems:

- **Works on my machine issue** → An app ran locally but broke in production.
- **Conflicts** → Two apps required different versions of the same library.
- **Heavy VMs** → Virtual machines solved some issues but were slow and consumed a lot of resources.

👉 **Containers solve this**:

- Lightweight (share the host OS kernel).
- Portable (run anywhere).
- Isolated (each container has its own environment).

---

## 2. Docker Concepts

- **Image** → A snapshot/blueprint of an app (like a recipe).
- **Container** → A running instance of an image (like a dish made from the recipe).
- **Dockerfile** → Instructions to build an image.
- **Docker Hub** → A public repository to share images.

---

## 3. Docker Syntax Basics

- Check Docker version:
  ```bash
  docker --version
  ```
- Run your first container (hello world):
  ```bash
  docker run hello-world
  ```
- List running containers:
  ```bash
  docker ps
  ```
- Stop a container:
  ```bash
  docker stop <container_id>
  ```
- Remove a container:
  ```bash
  docker rm <container_id>
  ```

---

## 4. Building Dockerfiles

A **Dockerfile** defines how to build an image. Example with **Node.js** app:

### Step 1: Create a simple Node app (`app.js`)

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Docker!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### Step 2: Create a `package.json`

```json
{
  "name": "docker-demo",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  }
}
```

### Step 3: Write a `Dockerfile`

```dockerfile
# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
```

---

## 5. Running Containers

Build and run your container:

```bash
# Build image
docker build -t docker-demo .

# Run container
docker run -p 4000:3000 docker-demo
```

👉 Open [http://localhost:4000](http://localhost:4000) and you’ll see:

```
Hello from Docker!
```

---

## 6. Hands-on: Your First Dockerized App

1. Install Docker.
2. Create a small Node.js (or Python) app.
3. Write a `Dockerfile`.
4. Build the image.
5. Run it with port mapping.
6. Share image on Docker Hub (optional).

---

# Docker in Action 🚀

This guide will help you understand Docker with hands-on examples, from building simple containers to deploying multi-container apps with Docker Compose.

---

## 1. Docker in Action

Docker is a platform for building, running, and shipping applications inside containers.

### Example: Running Nginx

```bash
# Pull nginx image
docker pull nginx

# Run a container on port 8080
docker run -d -p 8080:80 nginx
```

Now, open [http://localhost:8080](http://localhost:8080) to see Nginx running.

---

## 2. Docker Compose for Multi-Container Setup

**Docker Compose** lets you define and run multiple containers using a single YAML file.

### Example: Web App + Database

Create a `docker-compose.yml`:

```yaml
version: "3.9"
services:
  web:
    image: node:18
    working_dir: /app
    volumes:
      - .:/app
    command: sh -c "npm install && npm start"
    ports:
      - "3000:3000"

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    ports:
      - "5432:5432"
```

Run it:

```bash
docker-compose up -d
```

This starts **Node.js** on port 3000 and **Postgres** on port 5432.

---

## 3. Pushing to Docker Hub

You can publish your images to [Docker Hub](https://hub.docker.com/) for others to use.

### Example: Build & Push

```bash
# Login to Docker Hub
docker login

# Build image
docker build -t username/myapp:1.0 .

# Push image
docker push username/myapp:1.0
```

Now your image is public (or private if configured).

---

## 4. Deploying Containerized Apps

You can deploy Docker containers to any server with Docker installed.

### Example: Deploy on a VPS

```bash
# Pull the image from Docker Hub
docker pull username/myapp:1.0

# Run it
docker run -d -p 80:3000 username/myapp:1.0
```

Now your app is live on the server’s IP address.

---

## 5. Hands-on Project: Create and Deploy

### Project Idea: Simple Node.js App with Database

1. **App setup** (Node.js + Express)

   ```javascript
   // index.js
   const express = require("express");
   const app = express();
   app.get("/", (req, res) => res.send("Hello Docker!"));
   app.listen(3000, () => console.log("App running on port 3000"));
   ```

   ```json
   // package.json
   {
     "name": "docker-app",
     "version": "1.0.0",
     "main": "index.js",
     "scripts": {
       "start": "node index.js"
     },
     "dependencies": {
       "express": "^4.18.2"
     }
   }
   ```

2. **Dockerfile**

   ```dockerfile
   FROM node:18
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   CMD ["npm", "start"]
   ```

3. **Compose File (web + db)**

   ```yaml
   version: "3.9"
   services:
     web:
       build: .
       ports:
         - "3000:3000"
     db:
       image: postgres:15
       environment:
         POSTGRES_USER: user
         POSTGRES_PASSWORD: password
         POSTGRES_DB: mydb
   ```

4. **Run the app**

   ```bash
   docker-compose up -d
   ```

5. **Push image & deploy**
   ```bash
   docker build -t username/docker-app:1.0 .
   docker push username/docker-app:1.0
   docker run -d -p 80:3000 username/docker-app:1.0
   ```

Now your app is containerized, deployed, and accessible online.

---

✅ With these steps, you’ve gone from running a single container to a **multi-container app**, published it to **Docker Hub**, and deployed it on a server.
