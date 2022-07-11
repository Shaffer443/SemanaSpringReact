import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* 
Esta estrutura básica de uma palicação React. O react é uma biblioteca reponsavél por processar as informações
do projeto e aprensentar um resulatdo gráfico no naevagor. Esse processamento chama-se renderização (.render).
Converter informações em imagens, visual. 
Ele faz isso conversando com o dumento HTML, que neste exemplo está usando un ID chamado "root". Dentro da página
index.html.
Dentro do .render, tem um App. Que é o App.tsx, porque o que será mostrado na tela é uma função do javascript.
No caso, editamos o App.tsx, e colocamos para ele retornar um contudo,q ue no caso foi uma frase em <h1>. E é o que 
será exibido na tela, nesta caso.

Os import é o ques sendo importado para uso.
*/


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
