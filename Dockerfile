FROM node:22.11.0

WORKDIR /usr/src/kanban-api-node

COPY package*.json ./

RUN npm install --only=production

COPY ./ ./

USER node

CMD ["/bin/bash"]

EXPOSE 3000