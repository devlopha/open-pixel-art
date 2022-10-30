# Set the base image as the latest node alpine version
FROM node:lts-alpine

# Copy the work directory so we can use it
COPY . /open-pixel-art
WORKDIR /open-pixel-art

# Install Dependencies
RUN npm install

# Test Code
RUN npm test

# Expose 8080 Port so we can access when we have the Docker instance running
EXPOSE 8080

async function evaluatePixelChanges(jsonPatch) {
  if (!doesJsonMatchSchema(jsonPatch.after)) {
    fail(stripIndents`Your pixels.json file does not match the expected schema.

    expected schema: 
    {
      data: [
        // pixels go here
      ]
    }
    `);
    return false;
  }

# Turn on Web Server
CMD ["npm", "start"]
