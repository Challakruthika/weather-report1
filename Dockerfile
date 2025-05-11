# 1. Use the official Node.js image
FROM node:18

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and lock files first (for caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your app
COPY . .

# 6. Build the app
RUN npm run build

# 7. Expose the preview port
EXPOSE 4173

# 8. Start the preview server (in production mode)
CMD ["npm", "run", "preview", "--", "--host"]
