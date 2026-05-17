# 🚀 CI/CD Fundamentals & GitHub Actions Guide

A beginner-friendly guide to understanding CI/CD pipelines and learning GitHub Actions step by step.

---

# 📘 What is CI/CD?

CI/CD stands for:

- **CI → Continuous Integration**
- **CD → Continuous Delivery / Continuous Deployment**

CI/CD automates the complete software delivery process:

```text
Code → Build → Test → Deploy → Monitor
```

Whenever developers push code to GitHub, the pipeline automatically starts working.

---

# 🤖 Why Automation Matters

Without automation:

- Manual testing takes time
- Deployments become difficult
- Human errors increase
- Bugs reach production

With CI/CD:

✅ Faster releases  
✅ Automatic testing  
✅ Better code quality  
✅ Reliable deployments  
✅ Saves developer time  

---

# 🔄 CI/CD Pipeline Stages

## 🟢 1. Source Stage

- Developer pushes code to GitHub
- GitHub triggers the pipeline automatically

## 🔨 2. Build Stage

```bash
npm install
npm run build
```

## 🧪 3. Test Stage

```bash
npm test
```

## 🚀 4. Deploy Stage

Deploy to:
- QA
- Staging
- Production

## 📈 5. Monitor Stage

Monitor:
- Logs
- Metrics
- Errors
- Performance

---

# 📊 Simple CI/CD Pipeline Flow

```text
Developer Pushes Code
          ↓
     Source Stage
          ↓
      Build Stage
          ↓
      Test Stage
          ↓
    Deploy Stage
          ↓
    Monitor Stage
```

---

# 🛠 Popular CI/CD Tools

| Tool | Purpose |
|---|---|
| Jenkins | Automation Server |
| GitHub Actions | GitHub CI/CD |
| GitLab CI/CD | GitLab Automation |
| CircleCI | Cloud CI/CD |
| TravisCI | Automated Testing |

---

# 📘 Learning GitHub Actions

Workflow files are stored inside:

```text
.github/workflows/
```

---

# 📄 YAML Basics

## Key & Value

```yaml
name: Build App
```

## List

```yaml
steps:
  - name: Install
  - name: Test
```

---

# ⚙️ GitHub Actions Core Concepts

## Workflow
A YAML automation file.

## Trigger (`on`)
Defines when workflow runs.

```yaml
on:
  push:
  pull_request:
```

## Jobs
Jobs run in parallel by default.

## Steps
Steps run one by one.

## Actions

```yaml
uses: actions/checkout@v4
```

## Runner

```yaml
runs-on: ubuntu-latest
```

---

# 👋 First GitHub Workflow

```yaml
name: Hello CI

on:
  push:
    branches: [main]

jobs:
  hello:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Say Hello
        run: echo "Hello GitHub Actions!"
```

---

# 🟩 Node.js CI Example

```yaml
name: Node CI

on:
  push:
    branches: [main]

jobs:
  ci:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm ci
      - run: npm test
```

---

# 📦 Artifacts

Artifacts store generated workflow files like:
- Build folders
- Reports
- Coverage

```yaml
- uses: actions/upload-artifact@v4
  with:
    name: build-files
    path: dist/
```

---

# 🔁 Matrix Builds

```yaml
strategy:
  matrix:
    node: [16, 18, 20]
```

---

# 🔐 Secrets & Environment Variables

```yaml
env:
  TOKEN: ${{ secrets.MY_TOKEN }}
```

---

# 🐳 Docker Build Example

```bash
docker build -t myapp .
docker push myapp
```

---

# 🧩 Complete CI/CD Flow

```text
Push Code
   ↓
Run Tests
   ↓
Build Application
   ↓
Upload Artifact
   ↓
Deploy Application
   ↓
Monitor Production
```

---

# 📝 Assignment 1 – Multi-Branch Deployment

| Branch/Event | Environment | Deploy |
|---|---|---|
| main | Production | ✅ |
| dev | QA | ✅ |
| pull_request | None | ❌ |

---

# 📝 Assignment 2 – Matrix Testing

## Goals

- Test on Node 16, 18, 20
- Build only after tests pass
- Store reports and build output

---

# 🎯 Practice Roadmap

## Beginner
- Hello Workflow
- Node.js CI
- Basic Testing

## Intermediate
- Artifacts
- Matrix Builds
- Secrets
- Deployments

## Advanced
- Docker CI/CD
- Self-hosted Runners
- Production Deployments
- Monitoring

---

# 🏁 Conclusion

CI/CD is an essential modern development skill.

Learning GitHub Actions helps developers:
- Automate workflows
- Test code automatically
- Deploy faster
- Reduce bugs
- Improve software quality

Start with simple workflows and slowly move toward advanced pipelines. 🚀
