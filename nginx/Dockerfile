# FROM nginx:1.20-alpine
FROM ubuntu:18.04
#RUN rm /etc/nginx/conf.d/default.conf
# COPY default.conf /etc/nginx/conf.d/default.conf

# install certbot
RUN apt update -y \
  && apt install nginx curl vim -y \
  && apt-get install software-properties-common -y \
  && add-apt-repository ppa:certbot/certbot -y \
  && apt-get update -y \
  && apt-get install python-certbot-nginx -y \
  && apt-get clean


# RUN apk add python3 python3-dev py3-pip build-base libressl-dev musl-dev libffi-dev rust cargo
# RUN pip3 install pip --upgrade
# RUN pip3 install certbot-nginx
# RUN mkdir /etc/letsencrypt

# ENV https_proxy 80
# RUN apt-get update && \
#   apt-get install -y openssl && \
#   cd /etc/nginx && \
#   openssl genrsa -des3 -passout pass:password1 -out cert.pass.key 2048 && \
#   openssl rsa -passin pass:password1 -in cert.pass.key -out cert.key && \
#   rm cert.pass.key && \
#   openssl req -new -key cert.key -out cert.csr \
#   -subj "/C=US/ST=California/L=San Francisco/O=Altangadas/OU=Altangadas/CN=altangadas.com" && \
#   openssl x509 -req -days 365 -in cert.csr -signkey cert.key -out cert.crt

EXPOSE 80 443

# add nginx conf
#ADD config/altangadas.com /etc/nginx/sites-available/altangadas.com

# add altangadas server certs
# ADD certs/server.crt /etc/nginx/certs/server.crt
# ADD certs/server.key /etc/nginx/certs/server.key

# make certs dir as volume
# VOLUME ["/etc/letsencrypt"]
STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]

