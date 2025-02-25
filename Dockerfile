FROM php:8.2-apache

# Instalar extensões necessárias
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql mysqli

# Copiar os arquivos do projeto para o container
COPY ./app /var/www/html

# Expor a porta 80
EXPOSE 80