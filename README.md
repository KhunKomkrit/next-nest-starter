# Monorepo Next.js + NestJS Starter 🚀

This project combines **Next.js** for the frontend and **NestJS** for the backend. It includes basic features for authentication and authorization. 🔒

## Features ✨
1. **OAuth** with Passport.js 🔑
2. **Authentication & Authorization** using CASL 🛡️
3. **User Management UI** (CRUD) with permission settings 👥
4. **System Monitoring UI** 📊
5. **Multi-language support** for Thai 🇹🇭 and English 🇬🇧

## Installation 💻
To get started, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/monorepo-nextjs-nestjs-starter.git
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. Configure environment variables ⚙️

    Example for the backend:
    ```env
    DATABASE_URL=your-database-url
    JWT_SECRET=your-jwt-secret
    ```

4. Start the development server 🖥️
    - Frontend: `npm run dev`
    - Backend: `npm run start:dev`
