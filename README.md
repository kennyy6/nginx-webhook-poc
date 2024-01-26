# nginx-websocket-poc
Nginx Reverse proxy websocket poc


Default settings to try and use


```
server {
    listen 80;

    server_name '';  # Replace with your domain name, or leave blank

    location / {
        proxy_pass http://<IP>:<PORT>;  # Proxy pass to the target IP and port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
