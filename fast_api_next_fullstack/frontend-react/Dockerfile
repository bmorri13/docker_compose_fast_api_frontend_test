FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
RUN npm run build

EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host"] 