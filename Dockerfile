FROM node:latest
WORKDIR /calculadora/
COPY . .
RUN npm install
RUN npm run build


FROM nginx:latest
COPY --from=0 /calculadora/dist/* /usr/share/nginx/html/.
EXPOSE 80


