const studants = [
  {
    name: "Eduardo",
    noteOne: 10,
    noteTwo: 9
  },
  {
    name: "Victoria",
    noteOne: 10,
    noteTwo: 10
  },
  {
    name: "Vanessa",
    noteOne: 5,
    noteTwo: 6.6
  },
  {
    name: "Barbara",
    noteOne: 0.8,
    noteTwo: 7
  }
]

function calc(property) {
  let av = (property.noteOne + property.noteTwo) / 2
  av = av.toFixed(2)
  return av
}

for(averageOfstudant of studants) {
  
  let average = calc(averageOfstudant)

  if(average <= 5) {
    alert(`Caro aluno(a) ${averageOfstudant.name}, sua média foi de: ${average} 
Infelizmente você foi reprovado(a)`)
  }

  else if (average == 6 || average < 7 ) {
    alert(`Caro aluno(a) ${averageOfstudant.name}, sua média foi de: ${average} 
Estude para prova de recuperação`)
  }

  else {
    alert(`Caro aluno(a) ${averageOfstudant.name}, sua média foi de: ${average} 
Você foi aprovado(a), parabéns!`)
  }
}
