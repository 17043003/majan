FROM node:lts
RUN yarn global add create-react-app
RUN yarn add redux
RUN yarn add react-redux

EXPOSE 3000
