const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('start-btn');
let questionNumber = 1
let score = 0

startButton.addEventListener('click', function(){
    quizContainer.innerHTML = displayQuestion(questionNumber);

})

$('#next').click(function(){
    console.log("Clicked")
    if(questionNumber == question.length - 1){
        //show final answer
    }
    checkCorrectAnswer(questionNumber)
    questionNumber++
    quizContainer.innerHTML = displayQuestion(questionNumber);
})

function checkCorrectAnswer(questionNumber){
    // grab the element that was checked
    // grab the alphabet
    // check alphabet against correct answer for question number
    // if correct , inncrement score

}

function displayQuestions(questionNumber) {
        const answers = [];
        let question = myQuestions[questionNumber - 1]
        for(answer in question.answers){
            answers.push(
                `<label>
                <input class= "option" type="radio" name="question${questionNumber}" value="${answer}">
                ${answer} :
                ${question.answers[answer]}
                </label>`
            );
            }

            return `<div class="question"> ${question.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                   ` 
      }


  function showResults(){

  
    const answerContainers = quizContainer.querySelectorAll('.answers');

  
    let numCorrect = 0;

   
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

     
      if(userAnswer === currentQuestion.correctAnswer){
        
        numCorrect++;

        
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      
      else{
        
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  

  
  const myQuestions = [
    { "id": 1,
    question: "Player casts Assasinate on Acolyte of pain. Acolyte's owner will:",
    answers: {
        a: "Draw no cards",
        b: "Draw 1 card.",
        c: "Draw 2 cards",
        d: "Draw 3 cards"
    },
    correctAnswer: "a"
},

{
    "id": 2,
    question: "Priest has two Sorcerer's Apprentices on board and two Shadowforms in hand. <br> How many times can he use Hero Power this turn?",
    answers: {
        a: "1",
        b: "2",
        c: "3",
        d: "4"
    },
    correctAnswer: "c"
},

{
    "id": 3,
    question: "Who developed Hearthstone?",
    answers: {
        a: "Riot Games",
        b: "Blizzard Entertainment",
        c: "EA Games",
        d: "Epic Games"
    },
    correctAnswer: "b"
},

{
    "id": 4,
    question: "How many cards are in a deck?",
    answers: {
        a: "15",
        b: "20",
        c: "28",
        d: "30"
    },
    correctAnswer: "d"
},
{   "id": 5,
    question: "How many types of cards are there?",
    answers: {
        a: "4",
        b: "6",
        c: "8",
        d: "5"
    },
    correctAnswer: "a"
},

{   "id": 6,
    question: "What is the rarest card?",
    answers: {
        a: "Epic",
        b: "Rare",
        c: "Legendary",
        d: "Common"
    },
    correctAnswer: "c"
},

{   "id": 7,
    question: " True or False : The Assassinate card can destroy a minion with Divine Shield.",
    answers: {
        a: "True",
        b: "False"
    },
    correctAnswer: "a"
},

{   "id": 8,
    question: " True or False : You can increase the damage of Eye for an Eye with Spellpower.",
    answers: {
        a: "True",
        b: "False"
    },
    correctAnswer: "a"
},

{   "id": 9,
    question: " True or False : Crazed Alchemist's battlecry can destroy a minion with 0 Attack. ",
    answers: {
        a: "True",
        b: "False"
    },
    correctAnswer: "a"
},

{   "id": 10,
    question: "Mage has Spellbender secret readied. Opponent Rogue plays Shadowstept.",
    answers: {
        a: "Spellbender Minion will return to Mage's hand",
        b: "Spellbender Minion will return to Rogue's hand.",
        c: " The secret will not trigger.",
        d: "Mage incurs -10 damage."
    },
    correctAnswer: "a"
},

{   "id": 11,
    question: "Who says Put this apple on your head?",
    answers: {
        a: "Knife Juggler",
        b: "Big Game Hunter",
        c: "Northshire Cleric",
        d: "Mad Bomber"
    },
    correctAnswer: "a"
},

{   "id": 12,
    question: " Priest gains control of Paladin's minion with Blessing of Wisdom on it. Who will draw a card if this minion attacks?",
    answers: {
        a: "Paladin",
        b: "Both",
        c: "None"
    },
    correctAnswer: "a"
},

{   "id": 13,
    question: " Priest takes control of an enemy minion, then Rogue casts Sap on it.",
    answers: {
        a: "It will return to Rogue's hand",
        b: "It will return to Priest's hand.",
        c: "Will take damage.",
        d: "Nothing happens."
    },
    correctAnswer: "b"
},

{   "id": 14,
    question: " True or False : The Hunter's Snipe will trigger when opponent casts Animal Companion.",
    answers: {   
        a: "True",
        b: "False"
    },
    correctAnswer: "b"
}

  ];







