FROM node:20

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://server:3001

# Change npm ci to npm install since we are going to be in development mode
RUN npm ci

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]