"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello World');
});
app.get('/bsm', function (request, response) {
    response.send('*********** LISTA DE BSM *********** <br> <br> PERSISTÊNCIA <br>'
        + 'RESPONSABILIDADE PESSOAL <br> ORIENTAÇÃO AO FUTURO <br> MENTALIDADE DE CRESCIMENTO <br>'
        + 'TRABALHO EM EQUIPE <br> ATENÇÃO AOS DETALHES <br> PROATIVIDADE <br> COMUNICAÇÃO');
});
app.get('/objetivo', function (request, response) {
    response.send('____________________________________________________________ <br><br>'
        + '            MEUS OBJETIVOS DE APRENDIZAGEM NA SEMANA SÃO: <br><br>'
        + 'Buscar revisar compreender e praticar mais os conteúdos repassados <br>'
        + 'E Assim conseguir minha evolução contínua');
});
app.listen(port, function () {
    console.log('Servidor está rodando');
});
