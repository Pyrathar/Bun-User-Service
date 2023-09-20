# Use the official Oven Bun
FROM oven/bun

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies inside the container
RUN bun install

RUN bunx prisma generate

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["bun", "run","index.ts"]