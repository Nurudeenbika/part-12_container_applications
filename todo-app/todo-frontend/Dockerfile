FROM node:20

WORKDIR /usr/src/app

COPY . .

# Use Nginx proxy path, not direct service URL
ENV VITE_BACKEND_URL=/api

RUN npm ci

# Add this line to run tests. The build will fail if tests fail.
#RUN npm run test
# ENV REACT_APP_BACKEND_URL http://server:3001/

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

CMD ["npm", "run", "dev", "--", "--host"]