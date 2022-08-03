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

Antes de tudo, recomendo ler os comentários que deixei na
[documentação da API](https://github.com/gabriel-de-azevedo/capital-empreendedor-test-backend),
porque lá falo um pouco sobre o processo de desenvolvimento como um todo. Porém, quanto ao Front-End,
acabei precisando de menos tempo do que imaginava pra deixar tudo pronto.

Como optei por fazer algo simples e usar o
[Chakra UI](https://chakra-ui.com/)
para a estilização, o que me restava era re-lembrar como estruturar uma aplicação React e como usar as
bibliotecas que precisei. E mesmo assim, ainda tendo que assistir videos e re-ler as documentaçãos tanto do
React Router e quanto do Axios, o que mais me tomou tempo foi definir um design básico para as páginas e aprender
a usar os componentes do Chakra.

Na verdade, o único motivo pelo qual tenho mais afinidade pelo Back-End é todo esse processo de estilização do Front.
Talvez eu só não tenha encontrado ainda uma ferramenta que me agrade ou não tenha dedicado tempo suficiente estudando
todas as propriedades do CSS mas sei que, se dedicar um pouco mais de tempo nisso, posso aprender a gostar de trabalhar
com estilização tanto quanto amo trabalhar com o Back.

De qualquer forma, consegui terminar uma versão básica do Front bem mais cedo do que esperava e voltei a trabalhar com
o Back-End mais um pouco. Ainda tem várias coisas que gostaria de ter adicionado no projeto como um todo, mas estou bem
feliz com o resultado. Me orgulho bastante na organização e legibilidade do meu código e creio que esse projeto não foi
exceção.

Mais uma vez, agradeço a oportunidade de mostrar meu trabalho e fico na expectativa de um feedback, seja sobre a
oportunidade de começar minha jornada com vocês ou até mesmo sobre sugestões do que poderia ter feito no projeto mesmo.

Atenciosamente,

Gabriel Marques de Azevedo
