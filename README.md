# wszd-pizzaria

Este é um projeto que consiste em três partes principais: o backend em Node.js, o frontend em React com TypeScript usando Next.js e o aplicativo mobile em TypeScript com React Native e Expo. 
Ele foi desenvolvido para aprender novas habilidades nas respectivas áreas, praticando typescript e react.

# Configuração
É necessário configurar alguns detalhes antes de iniciar.

## Backend (Node.js com Prisma e PostgreSQL)
1. Navegue até a pasta backend e instale as dependencias npm install.
2. Configure as variáveis de ambiente criando um arquivo .env na raiz do diretório backend com suas configurações:

**DATABASE_URL=""**
**JWT_SECRET=""**

3. Substitua usuario, senha, localhost, 5432 e nome-do-banco pelas suas configurações específicas do PostgreSQL e também crie um JWT_SECRET.

4. Execute as migrações do Prisma para criar o esquema do banco de dados: npx prisma migrate dev
5. Inicie o servidor: npm start ou yarn start

*Agora, o backend está configurado com o Prisma e o PostgreSQL. Certifique-se de ter o PostgreSQL instalado e configurado em seu sistema antes de prosseguir com estas etapas.*


## Frontend (React com Next.js)
1. Navegue até a pasta frontend e instale as dependencias npm install.
2. Certifique-se de que o Next já está instalado de forma global.
3. Verifique a configuração do baseURL: 'http://localhost:3333'.

## Aplicativo Mobile (React Native com Expo)
1. Navegue até a pasta mobile e instale as dependencias npm install.
2. Instale o expo de forma global.
3. inicie a aplicação com npm start ou yarn start.
4. Use um emulador ou o aplicativo Expo Go no seu dispositivo para visualizar o aplicativo.
   
## Desenvolvimento
Este projeto é uma estrutura básica que você pode expandir de acordo com suas necessidades. A estrutura de diretórios é a seguinte:

**backend:** Contém o código do servidor Node.js que faz toda a parte das apis, crud basico.

**frontend:** Contém o código do aplicativo web React com Next.js, simulando como se fosse a cozinha da pizzaria que recebe os pedidos e finaliza, e também inclui novos itens no cardápio.

**mobile:** Contém o código do aplicativo mobile React Native com Expo, a ideia é que seja utilizado pelo garçom durante a crianção de novos pedidos para a cozinha.
