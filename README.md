## COMO RODAR O BACKEND
ANTES DE INICIAR, PARA FACILITAR EU JÁ EFETUEI O DEPLOY DA APLICAÇÃO (FRONT E BACK), EM UMA MAQUINA NA AWS
PODE EFETUAR OS TESTES NO LINK: 


## ==========================================
## INSTALANDO AS DEPENDÊNCIAS

npm install

## ==========================================

## RODADO O SERVIDOR

npm start

ESSE COMANDO VAI COMPILAR O PROJETO DE TS PRA JS, E RODAR NO NODEMON

## ==========================================

## ROTAS E MÉTODOS DISPONÍVEIS

· GET /employees - Lista todos os empregados

· GET / employees /{id} - Busca um empregado por id

· POST / employees - Cria um novo empregado

· PUT / employees /{id} - Edita um empregado

· DELETE / employees /{id} - Deleta um empregado

NO CASO AS REQUISIÇÕES COM PARÂMETROS (ID), FOI UTILIZADO O PRÓPRIO ID GERADO PELO MONGO.

## ==========================================

## IMPORTANTE: LEMBRANDO QUE POSSUI UM SISTEMA DE AUTENTICAÇÃO VIA TOKEN JWT.
## A MENOS QUE VOCÊ DESABILITE A AUTENTICAÇÃO NO COMPONENTE, NÃO CONSEGUIRÁ TESTAR AS REQUISIÇÕES FACILMENTE (SEM CONFIGURAR O TOKEN).
## PELO FRONTEND SERÁ POSSIVEL TESTAR TODAS AS REQ E MÉTODOS.
