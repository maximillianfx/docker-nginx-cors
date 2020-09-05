FROM nginx:latest

RUN apt-get update && apt-get install dnsutils -y && apt-get install iputils-ping -y

WORKDIR /etc/nginx
COPY ./nginx.conf ./conf.d/default.conf
EXPOSE 80
ENTRYPOINT [ "nginx" ]
CMD [ "-g", "daemon off;" ]