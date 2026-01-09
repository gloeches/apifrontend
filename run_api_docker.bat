docker run -d -p 8020:80 --name apifrontend_volume ^
-v ./prod.config.json:/usr/share/nginx/html/config.json ^
gloeches/apifrontend:v04