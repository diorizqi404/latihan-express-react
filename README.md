# Website User Management

This project is a simple CRUD (Create, Read, Update, Delete) application for managing users with authentication. The frontend is built with React, and the backend is powered by Express.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
  - [Frontend](#for-frontend)
  - [Backend](#for-backend)
- [Environment Variables](#environment-variables)
  - [Frontend Configuration](#frontend-configuration)
  - [Backend Configuration](#backend-configuration)
- [Deployment](#deployment)
  - [Local/development](#localdevelopment)
  - [Production](#production)
- [License](#license)
- [Authors](#authors)

## Tech Stack
This website build with several tech stack below

**Client:** React, TailwindCSS

**Server:** NodeJS, Express, MySQL, JWT

## Prerequisites
- Node.js (prefer use lts)
- npm (Node Package Manager)
- MySQL/MariaDB

## Installation & Setup
Follow these instructions to set up the project on your local machine or production.

#### 1. Clone the repository

##### for frontend
```bash
  git clone -b frontend https://github.com/diorizqi404/latihan-express-react.git
```

##### for backend
```bash
  git clone -b backend https://github.com/diorizqi404/latihan-express-react.git
```

#### 2. Go to project directory
```bash
  cd latihan-express-react
```

#### 3. Install dependencies
```bash
  npm install
```

#### 3.1 Migrate Database (only for backend)
```bash
  npx prisma migrate dev
```

## Environment Variables

To run this project, you will need to change the following environment variables to your .env file for backend and api.js for frontend.

### Frontend Configuration
In the src/services/api.js file, you need to change the `baseURL` for the API.

```bash
const Api = axios.create({
    baseURL: 'http://YOUR_PRODUCTION_URL'
})
```

### Backend Configuration
In the backend, you need to update the .env file with your database connection and change the environment:

```bash
DATABASE_URL="mysql://USERNAME:PASSWORD@YOUR_DATABASE_ENDPOINT:3306/DATABASE_NAME"

NODE_ENV=development
```
> The default environment is development, if you want to run in production, change NODE_ENV to production.


## Deployment
Follow these instructions to deploy the project on your local machine or production. I assume you've done the installation step.

### Local/development

#### Frontend Server
```bash
  npm run dev
```

#### Backend Server
```bash
  npm start
```

### Production

For backend, you must migrate deploy first.
```bash
  npx prisma migrate deploy
```

> Alternative, you can use `pm2` for backend server. See this [tutorial](https://medium.com/@diorizqi/deploy-react-dan-express-di-aws-ec2-instance-4758d4b0427f)

For production, you must build first an then the result on the folder `dist`.

```bash
  npm run build
```

## License

This project is licensed under the MIT License.

## Authors

- [@diorizqi404](https://www.github.com/diorizqi404)

- Thanks to [@SantriKoding-com](https://github.com/SantriKoding-com)
