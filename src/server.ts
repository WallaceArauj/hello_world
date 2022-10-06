import * as express from 'express'

const app  = express ();
const port = 3000



app.get('/',(request, response)=>{
    response.send('Hello World');
}) 

app.get('/bsm',(request, response)=>{
    response.send('*********** LISTA DE BSM *********** <br> <br> PERSISTÊNCIA <br>'
    + 'RESPONSABILIDADE PESSOAL <br> ORIENTAÇÃO AO FUTURO <br> MENTALIDADE DE CRESCIMENTO <br>' 
    + 'TRABALHO EM EQUIPE <br> ATENÇÃO AOS DETALHES <br> PROATIVIDADE <br> COMUNICAÇÃO'
    )
})

app.get('/objetivo', (request, response)=> {
    response.send ('____________________________________________________________ <br><br>'
    + '            MEUS OBJETIVOS DE APRENDIZAGEM NA SEMANA SÃO: <br><br>'
    + 'Buscar revisar compreender e praticar mais os conteúdos repassados <br>'
    + 'E Assim conseguir minha evolução contínua')
})

app.listen(port, () =>{
    console.log('Servidor está rodando');
})