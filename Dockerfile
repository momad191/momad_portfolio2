FROM node:20-alpine

ARG OPENAI_API_KEY
ARG MONGO_DB_CONNECTION_STRING 

ENV OPENAI_API_KEY ${{ OPENAI_API_KEY }}
ENV MONGO_DB_CONNECTION_STRING ${{ MONGO_DB_CONNECTION_STRING }} 

WORKDIR /app

COPY  package*.json ./

RUN npm install --legacy-peer-deps

RUN npm run build

COPY . .


CMD ["npm","start"] 