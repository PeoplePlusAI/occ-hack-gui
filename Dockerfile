# Step 1: Use an official Node.js image as the base
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --force

# Step 5: Copy the rest of the Next.js app source code into the container
COPY . .

# Step 6: Build the Next.js app for production
RUN npm run build

# Step 7: Expose the port where Next.js will run (default is 3000)
EXPOSE 3000

# Step 8: Start the Next.js production server
CMD ["npm", "run", "start"]
