# FROM node:latest as node

# WORKDIR /app

# COPY . . 

# RUN npm install 

# RUN npm run build-prod


# FROM nginx:alpine

# COPY --from=node /app/dist/newsAPP  /Var/www/html

FROM nginx:1.17.1-alpine

COPY /dist/news-app /usr/share/nginx/html