FROM node:lts-alpine
USER node
ENV PATH /home/node/.yarn/bin:$PATH
RUN yarn global add gulp-cli
WORKDIR /srv
