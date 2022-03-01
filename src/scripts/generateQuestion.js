import { randomIntFromInterval, randomProperty } from "./randomFunctions";
/*
answers->
        pregunta
        respuestaCorrecta
        respuestas

Al crear la respuesta tiene que evaluar si es tipo multiple,binario(boolean)
o del tipo imagen.
                      pregunta
por lo q pregunta si guarda un String llamadi titulo que sera formado segun
sea acomado el elemento a pregunta esto aplica solo para multible o binario.
en el caso tipo imagen guardar solo un titulo estatico.
para la pregunta guardara una variable imagen q tiene el valor de la ruta imagen
para question tipo imagen y en caso q no un false para otro tipo

respuesta correcta solo guardar el id que correspende con arreglo correspondiente
y el nombre del pais en cuestion.

respuestas guardara el id del pais y  las posibles respuestas
*/
/* (title,type,img) =>

  return {
    exam:{
      title,
      img,
      trueAnswer:id

    },
  }

  let typeQuestion=['multiple','boolean','img']



 */

function selectObjectRandomProperty(property, array) {
  let randomObj = array[randomIntFromInterval(0, array.length - 1)];

  while (randomObj[property] == undefined) {
    randomObj = array[randomIntFromInterval(0, array.length - 1)];
  }

  return randomObj;
}

const formatQuestion = {
  capital: (elem) => {
    return {
      text: `${elem.name} is the capital of`,
      img: false,
      typeAnswer: "capital",
    };
  },
  /*subregion: (elem) => {
      return {
        text: `Does ${elem.name} belong to the subregion?`,
        img: false,
        typeAnswer:'subregion'
      };
    },*/
  landlocked: (elem) => {
    return {
      text: `${elem.name} is it a landlocked state?`,
      img: false,
      typeAnswer: "boolean",
    };
  },
  flag: (elem) => {
    return {
      text: "Which country does this flag belong to?",
      img: elem.flag,
      typeAnswer: "name",
    };
  },
};

function createAnswers(property, array) {
  let trueAnswer = null;
  let answers = [];
  let obj = null;

  let fq = {};
  for (let i = 0; i < 4; i++) {
    obj = selectObjectRandomProperty(property, array);

    if (!trueAnswer) {
      fq = formatQuestion[property](obj);
      trueAnswer = obj[fq.typeAnswer];
    }
    answers.push(obj[fq.typeAnswer]);
    array.splice(array.indexOf(obj), 1);
  }

  return { trueAnswer, answers, fq };
}

const g = function (array) {
  let aux = null;
  let question = {
    questionTitle: {
      text: "",
      img: false,
    },
    trueAnswer: null,
    answers: [],
  };
  let arrayAnswers=[]

  let selectProperty = randomProperty(formatQuestion);
  //let selectProperty='subregion'

  /*boolean only*/
  if (selectProperty == "landlocked") {
    aux = selectObjectRandomProperty(selectProperty, array);

    question.trueAnswer = aux[selectProperty];
    let { text, img } = formatQuestion[selectProperty](aux);
    question.questionTitle.text = text;
    question.questionTitle.img = img;
    arrayAnswers=[true, false];
    question.answers = arrayAnswers.sort(function () {
      return Math.random() - 0.5;
    })
    aux = null;
  } else {
    aux = createAnswers(selectProperty, array);
    question.questionTitle.text = aux.fq.text;
    arrayAnswers=aux.answers;
    question.questionTitle.img = aux.fq.img;
    question.trueAnswer = aux.trueAnswer;
    question.answers = arrayAnswers.sort(function () {
      return Math.random() - 0.5;
    })
  }

 

  return question;
};

export default g;
