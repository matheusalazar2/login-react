# Use a imagem de base adequada para a aplicação web (por exemplo, node para Node.js, python para Python, etc.)
FROM node:alpine

# Defina o diretório de trabalho na imagem Docker
WORKDIR /app

# Copie os arquivos necessários para o contêiner Docker
COPY package*.json ./
COPY . .

# Instale as dependências da aplicação
RUN npm install

# Expõe a porta necessária pela aplicação web
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]