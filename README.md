# Monorepo Next.js + NestJS Starter

This project is a full-stack application combining Next.js for the frontend and NestJS for the backend. It includes basic features like authentication, authorization, and user management.

## Features
1. **OAuth** with Passport.js
2. **Authentication & Authorization** using CASL
3. **User Management UI** (CRUD) with permission settings
4. **System Monitoring UI** to track system status
5. **Multi-language support** for Thai and English

## Tech Stack
- **Frontend**: Next.js
- **Backend**: NestJS
- **Database**: (Specify your choice, e.g., PostgreSQL or MongoDB)
- **Authentication**: OAuth (Passport.js)
- **Authorization**: CASL

## Installation

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

3. Configure environment variables:

    Create `.env` files for both frontend and backend, and set up the required variables.

    Example for the backend:
    ```env
    DATABASE_URL=your-database-url
    JWT_SECRET=your-jwt-secret
    ```

4. Start the development server:

    - Frontend:
    ```bash
    cd frontend
    npm run dev
    ```

    - Backend:
    ```bash
    cd backend
    npm run start:dev
    ```

## Usage

- Access the frontend at `http://localhost:3000`.
- Access the backend API at `http://localhost:4000`.

## Available Scripts

### Frontend
- `npm run dev`: Run the frontend in development mode.
- `npm run build`: Build the frontend for production.

### Backend
- `npm run start:dev`: Run the backend in development mode.
- `npm run build`: Build the backend for production.
- `npm run test`: Run tests for the backend.

## License

This project is licensed under the MIT License.
