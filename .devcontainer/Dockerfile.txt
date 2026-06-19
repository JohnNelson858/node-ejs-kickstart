FROM node:18

# Install Git explicitly
RUN apt-get update && apt-get install -y git

# Set working directory
WORKDIR /workspace

# Expose port for HTTP server
EXPOSE 3000
