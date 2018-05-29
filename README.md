# Minha Cidade
## O que é?
> Você entende que é importante todos os cidadãos entenderem como a gestão municipal investe nas áreas essenciais como saúde, educação, segurança e outras? Pois é, pensando nessa importância, criamos o Minha Cidade!

Minha Cidade é uma plataforma para análise de dados públicos extraidos das transparências municipais. A ideia veio por parte de Josué Paiva Benardino, um dos integrantes da equipe que criou e desenvolveu o Minha Cidade, que foi aprimorada e implementada por ele e pelos demais participantes da equipe. O processo de desenvolvimento se iniciou durante a primeira fase da maratona de programação [Hackfest 2017](http://hackfest.com.br/), chegando à fase final como um dos 10 melhores projetos. Promovida pelo [Ministério Público da Paraíba (MPPB)](http://www.mppb.mp.br/) em parceria com a Rede Paraibana de Comunicação, com a [Controladoria Geral da União (CGU)](http://www.cgu.gov.br/), com o [Tribunal de Contas do Estado da Paraíba (TCE)](https://portal.tce.pb.gov.br/) e outras instituições, a maratona ocorreu durante os dias 9 e 11 de Junho de 2017, com o objetivo de envolver a sociedade no combate à corrupção e a melhora dos serviços públicos por meio do desenvolvimento de soluções tecnológicas.

## Softwares


### [Backend](https://github.com/AbraaoHonorio/servernode/)
O Backend Minha Cidade expõe uma API de fácil acesso aos dados coletados pelo Crawler, provendo uma forma simples e eficiente de analisar dados públicos referentes às despesas municipais.

### [Documentação da API]
 Criamos uma API afim de disponibilizar esses dados de forma mais fácil para que futuros desenvolvedores posam criar aplicações com esses dados. acessem o site e veja a documentação completa.
 


 
 
## Instalação
Uma vez com o [NodeJS instalado](https://docs.docker.com/engine/installation/)

1. Clone esse repositório e entre em seu diretório

```shell
$ git clone https://github.com/minha-cidade/minha-cidade.git
$ cd servernode
```

2. Rode  `npm install` que baixará todos os node modules  necessários
para executar o projeto

```shell
$ npm install
```
    
3. Inicie o servidor 

```shell
$ npm start
```

 Basta acessar http://localhost:3000 para ver a landing page da api
e  localhost:3000/(rota) para ver a API.





