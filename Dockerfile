FROM nginx

COPY nginx off-the-gully/nginx/

COPY src off-the-gully/src/

EXPOSE 80

WORKDIR /off-the-gully

CMD ["nginx", "-p", ".", "-c", "nginx/nginx.conf", "-g", "daemon off;"]


