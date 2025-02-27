FROM php:8.2-apache

ENV TZ=America/Sao_Paulo
RUN echo "date.timezone=${TZ}" > /usr/local/etc/php/conf.d/timezone.ini

RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev libzip-dev unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql mysqli zip

COPY ./app /var/www/html

RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs

RUN npm install --global gulp-cli && npm install

EXPOSE 80

CMD ["apache2-foreground"]