#Creates a layer from node:alpine image.
FROM node:alpine
#Creates directories
RUN mkdir -p /usr/src/app
#Sets an environment variable
ENV PORT 5555
#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /usr/src/app
#Copy new files or directories into the filesystem of the container
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
#Execute commands in a new layer on top of the current image and commit the results
RUN npm install
##Copy new files or directories into the filesystem of the container
COPY . /usr/src/app
#Execute commands in a new layer on top of the current image and commit the results
RUN npm run build
#Informs container runtime that the container listens on the specified network ports at runtime
EXPOSE 5555

#Allows you to configure a container that will run as an executable
ENTRYPOINT ["npm", "start", "dev"]

#FROM node:lts-alpine
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
#COPY package.json /usr/src/app
#COPY package-lock.json /usr/src/app
#RUN npm install
#COPY . /usr/src/app
#RUN npm run build
#RUN ls -l
#CMD ["npm", "run", "start"]