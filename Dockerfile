# imagen base
FROM node:12-alpine
# directorio base para "la máquina"
WORKDIR /app

# indicando puerto "público" externo
EXPOSE 4200
# modificando el ambiente de la máquina
ENV PATH=/app/node_modules/.bin:$PATH

# copiamos los archivos que sirven para aplicar los comandos
COPY package*.json /app/
# ejecutamos install (por eso necesitamos copiar los archivos anteriores)
RUN npm install

# ejecutamos la aplicación
CMD ng serve --host 0.0.0.0