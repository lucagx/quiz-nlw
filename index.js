const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento de aplicativos móveis",
        "Um framework para construção de sites responsivos",
        "Uma linguagem de programação para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro no console",
        "Imprimir mensagens de depuração no console",
        "Iniciar uma animação na página web",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Uma instrução condicional",
        "Um valor constante",
        "Um local de armazenamento para dados",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma função em JavaScript?",
      respostas: [
        "function minhaFuncao()",
        "declare função minhaFuncao()",
        "fn minhaFuncao()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do operador '===' em comparações?",
      respostas: [
        "Comparação de valores, sem verificar o tipo",
        "Comparação de valores e tipos de dados",
        "Concatenação de strings",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia de dados",
        "Um modelo de objeto para representar a estrutura da página web",
        "Um sistema de gerenciamento de pacotes",
      ],
      correta: 1
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "loop(for i = 0; i < 10; i++)",
        "for (i = 0; i < 10; i++)",
        "for (let i = 0; i < 10; i++)",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a principal função do JSON em JavaScript?",
      respostas: [
        "Manipulação de elementos HTML",
        "Armazenamento de dados em formato de objeto",
        "Controle de fluxo de execução do código",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'callback' em JavaScript?",
      respostas: [
        "Uma função que retorna um valor",
        "Uma função que é passada como argumento para outra função",
        "Um tipo de variável",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma constante em JavaScript?",
      respostas: [
        "const minhaConst = 10;",
        "let minhaConst = 10;",
        "var minhaConst = 10;",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  // inserir as respostas 
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute("name", "pergunta-" + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta //true or false
      corretas.delete(item)
      if(estaCorreta) { // se opcao correta apresenta que acertou
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  // remove a respota A usada para copiar
  quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem) 
  
  }