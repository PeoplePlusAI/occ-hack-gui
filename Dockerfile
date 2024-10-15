# Step 1: Use an official Node.js image as the base
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your React app's source code into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Install a lightweight HTTP server to serve the build (you can use serve or http-server)
RUN npm install -g serve

# Step 8: Expose the port where the app will run
EXPOSE 3000

# Step 9: Start the app by serving the build folder
CMD ["serve", "-s", "build", "-l", "3000"]
