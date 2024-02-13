# Используем официальный образ Nginx
FROM nginx:latest

# Копируем содержимое папки public из вашего хоста в директорию /usr/share/nginx/html в контейнере
COPY C:/win11/ZNU_Workspace/Front-end_technology/lab_1/public /usr/share/nginx/html

# Открываем порт 80 для веб-трафика
EXPOSE 80

# Запускаем Nginx в фоновом режиме при старте контейнера
CMD ["nginx", "-g", "daemon off;"]
