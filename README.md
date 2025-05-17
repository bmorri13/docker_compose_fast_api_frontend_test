# Docker Compose with FastAPI and Frontend (Next.js & React)

This repository demonstrates a fullstack application setup using Docker Compose with a FastAPI backend and two frontend options:
1. Next.js frontend
2. React (Vite) frontend

The application showcases how to set up a development environment with Docker Compose where multiple services can communicate with each other in a containerized setup.

## Project Structure

```
fast_api_next_fullstack/
├── docker-compose.yml   # Docker Compose configuration
├── backend/             # FastAPI backend service
│   ├── Dockerfile       # Backend container definition
│   ├── main.py          # FastAPI application
│   └── requirements.txt # Python dependencies
├── frontend/            # Next.js frontend service
│   ├── Dockerfile       # Frontend container definition
│   ├── package.json     # Node.js dependencies
│   └── pages/           # Next.js pages
└── frontend-react/      # React (Vite) frontend service
    ├── Dockerfile       # React container definition
    ├── package.json     # Node.js dependencies
    └── src/             # React source files
```

## Features

- **FastAPI Backend**: Provides a simple API endpoint that returns a greeting message
- **Next.js Frontend**: Consumes the API endpoint and displays the message
- **React Frontend**: Alternative frontend using Vite that also consumes the API
- **Docker Compose**: Orchestrates all services with proper network configuration

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

## Running the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/docker_compose_fast_api_frontend_test.git
   cd docker_compose_fast_api_frontend_test/fast_api_next_fullstack
   ```

2. Start all services using Docker Compose:
   ```bash
   docker-compose up
   ```

3. Access the applications in your browser:
   - FastAPI Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
   - Next.js Frontend: [http://localhost:3000](http://localhost:3000)
   - React Frontend: [http://localhost:5173](http://localhost:5173)

4. To stop the services:
   ```bash
   docker-compose down
   ```

## Development

- Backend code changes will automatically reload thanks to the volume mount
- Frontend code changes will automatically reload thanks to the development server configurations

## API Endpoints

- `GET /api/hello`: Returns a JSON response with a greeting message

## Notes

- The Next.js frontend is configured for development mode with hot-reloading
- The React frontend uses Vite for fast development experience
- CORS is configured to allow requests from the frontend applications
