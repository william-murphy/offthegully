# offthegully
My personal website.

# Running Locally
1. Install NGINX
2. From this directory, run `nginx -p . -c nginx/nginx.conf`
3. To stop it, run `nginx -s stop`

# Running with Docker
1. Install Docker
2. From this directory, run `docker build -t off-the-gully .`
3. Run `docker run -p 80:80 -d --name off-the-gully --rm off-the-gully`
4. To stop it, press ctrl+c or run `docker stop off-the-gully`

# Running with Docker Compose
1. Install Docker / Docker Compose
2. From this directory, run `docker compose up`
3. To stop it, press ctrl+c
