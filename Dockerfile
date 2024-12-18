# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /src

# Copy the application files into the working directory
COPY . /src

# Install the application dependencies
RUN yarn install

# Build the React application
RUN yarn run build

# Expose port 5000
EXPOSE 5000

# Define the entry point for the container
CMD ["yarn", "start"]