const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const qImg = document.getElementById("questionImage");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");


let questions = [
    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },

    {
      question : " ",//*Plaats vraag plaatje hierin!*//
      imgSrc   : " ",//*Plaats standaard vraag plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      choiceA  : " ",//*Plaats antwoord plaatje hierin!*//
      correct  : "A",//*Correcte antwoord hier!*//
    },
]
