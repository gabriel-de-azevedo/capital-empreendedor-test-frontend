# Capital Cards

Capital Cards é uma aplicação Front-End desenvolvida usando a biblioteca React, tendo como objetivo utilizar
algumas das rotas desenvolvidas no projeto
[Capital Cards API](https://github.com/gabriel-de-azevedo/capital-empreendedor-test-backend).
Portanto, para que funcione propriamente, é necessário que a API já esteja rodando.
Como esses os projetos estão em fase de desenvolvimento e ainda não foram hospedados, ambos precisarão ser
executados localmente.

Por conta disso, recomendo ler a
[documentação da API](https://github.com/gabriel-de-azevedo/capital-empreendedor-test-backend)
antes de prosseguir. Porém, o processo de execução é extremamente simples e será descrito abaixo.

As páginas nessa aplicação foram desenvolvidas com o intuito de serem o mais simples possível, priorizando
eficiência e rapidez na sua criação acima do design. Por isso a decisão de usar cards como o conceito central,
focando apenas em exibir os dados da API e cobrir as funcionalidades básicas. Além disso, a biblioteca de
componentes
[Chakra UI](https://chakra-ui.com/)
foi utilizada para acelerar o processo de estilização e garantir um design responsivo.

Com o objetivo do teste técnico em mente, foram adicionados breves comentários em inglês em cada arquivo
JavaScript descrevendo sua funcionalidade. A última parte dessa documentação também possui alguns comentários
e observações sobre as decisões e comprometimentos feitos durante o processo de desenvolvimento.

<br/>

## Funcionalidades

- Página inicial com cards listando todos os clientes
- Página com cards listando todas as oportunidades de um cliente
- Alteração do status de uma oportunidade de um cliente

<br/>

## Como Executar

Primeiramente, o projeto
[Capital Cards API](https://github.com/gabriel-de-azevedo/capital-empreendedor-test-backend)
também precisa ser clonado localmente. É essencial que essa API seja iniciada antes do projeto React.

Ambas as aplicações podem ser iniciadas usando um dos seguintes comandos, dependendo do gerenciador de pacote
utilizado para instalar suas dependências:

### `npm run start`

### ou

### `yarn start`

<br/>

O Front-End poderá ser acessado em http://localhost:3000, enquanto o Back-End utilizará http://localhost:4000.

<br/>

# Comentários e Observações
