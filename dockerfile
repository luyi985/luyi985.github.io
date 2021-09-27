FROM node:14.17.6

ARG Token

RUN echo ${Token}
ENV BASE64_ACCESS_TOKEN ${Token}
WORKDIR /project
COPY src ./src
COPY package.json .
COPY webpack.config.js .
COPY tsconfig.json .
COPY template.html .
EXPOSE 80
RUN ls /project
RUN pwd
RUN npm install
RUN npm run build

CMD ["npm", "run", "serve:prod"]
