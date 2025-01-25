# Etapa de Build
FROM node:23-alpine AS build

# Definir o diretório de trabalho
WORKDIR /app

# Instalar o Angular CLI globalmente
RUN npm install -g @angular/cli

# Copiar o package.json e instalar as dependências
COPY ./package.json .
RUN npm install --force

# Copiar o restante dos arquivos do projeto
COPY . .

# Definir variáveis de ambiente (se necessário)
ENV APP_DEBUG='development'
ENV APP_NAME='cv-abelgasque'
ENV APP_VERSION='1.0.0'
ENV APP_AVATAR_IMG='https://github.com/abelgasque.png'

# Rodar o comando de build de pré-produção, se necessário
RUN npm run build-prod

# Construir o aplicativo Angular para produção
RUN npm run build --configuration=production

# Etapa de Runtime
FROM nginx:alpine AS runtime

# Copiar os arquivos de build para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html