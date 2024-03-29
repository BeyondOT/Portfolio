FROM node:16.17.1-alpine3.16 as build
WORKDIR /usr/app
COPY . /usr/app
RUN npm ci --legacy-peer-deps
RUN npm run build

FROM nginx:1.23.1-alpine
EXPOSE 3000
COPY --from=build /usr/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
# Start nginx
CMD ["nginx", "-g", "daemon off;"]