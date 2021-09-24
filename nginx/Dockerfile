FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
RUN mkdir /usr/share/nginx/log
ENV https_proxy 80
RUN apt-get update && \
  apt-get install -y openssl && \
  cd /etc/nginx && \
  openssl genrsa -des3 -passout pass:password1 -out cert.pass.key 2048 && \
  openssl rsa -passin pass:password1 -in cert.pass.key -out cert.key && \
  rm cert.pass.key && \
  openssl req -new -key cert.key -out cert.csr \
  -subj "/C=US/ST=California/L=San Francisco/O=Example/OU=Example/CN=example.com" && \
  openssl x509 -req -days 365 -in cert.csr -signkey cert.key -out cert.crt
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

