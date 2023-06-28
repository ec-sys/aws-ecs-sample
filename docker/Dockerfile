# FROM ubuntu:20.04
#RUN apt-get update
#RUN apt-get install curl -y
#RUN apt-get install apache2 -y

#RUN apt update
#RUN apt install curl -y
#RUN apt install apache2  -y
#RUN apt clean
#EXPOSE 80 4001
#CMD ["apache2ctl", "-D", "FOREGROUND"]

#FROM centos:latest
#
#RUN yum update -y
#RUN yum install httpd httpd-tools -y
#RUN yum install epel-release -y \
#    && yum update -y \
#    && yum install htop -y \
#    && yum install vim -y
#
#WORKDIR /var/www/html
#ADD . /var/www/html
#
#EXPOSE 80 4001
#
#ENTRYPOINT ["/usr/sbin/httpd"]
#
#CMD ["-D", "FOREGROUND"]

#FROM ubuntu
#RUN apt update
#RUN apt install curl -y
#RUN apt install apache2ctl -y
#RUN apt clean
#EXPOSE 80 4001
#CMD [“apache2ctl”, “-D”, “FOREGROUND”]

# Pull the minimal Ubuntu image
FROM ubuntu:20.04

# Install Nginx
RUN apt-get -y update && apt-get -y install nginx

# Copy the Nginx config
# COPY default /etc/nginx/sites-available/default

# Expose the port for access
EXPOSE 80 4001

# Run the Nginx server
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
