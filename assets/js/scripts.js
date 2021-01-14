const quizContainer = document.getElementById('quiz');
const startButton = document.getElementById('start-btn');
let questionNumber = 0;
let score = 0;
let totalQuestions = 13;


$(document).ready(function($) {
   $("#next").attr('disabled', 'disabled');
   $("#start-btn").click(function(){
     $("#next").removeAttr("disabled"); // removing attribute
   })
});
startButton.addEventListener('click', function(){
    quizContainer.innerHTML = displayQuestion(questionNumber);
    //https://stackoverflow.com/questions/33049365/hide-a-div-onclick-in-pure-javascript//
    if (startButton) {
       startButton.style.display = 'none';
    }
});


// step 1
$('#next').click(function(){
    console.log("Clicked");
  
// step 2

    if(questionNumber > totalQuestions) {
        displayResult()
    } else {
    checkCorrectAnswer(questionNumber);
    quizContainer.innerHTML = displayQuestion(questionNumber);
    }
    questionNumber++;
});

    function checkCorrectAnswer(questionNumber){
        let selectedAnswer;
        // grab checked element
        //grab the alphabet
        let options = document.querySelectorAll('.option')
        options.forEach(function(option){
            if(option.checked){
            selectedAnswer = option.defaultValue
            }
        })
        let question = myQuestions[questionNumber - 1]
        let correctAnswer = ["a"]
        console.log("questionNumber", questionNumber)
        console.log("question", question)
        console.log("selectedAnswer", selectedAnswer)
        console.log("correctAnswer", correctAnswer)
        if (selectedAnswer == correctAnswer){
        // answer is correct
        console.log("Correct answer")
        score++
    } else {
        // answer is wrong
        console.log("Wrong answer")
    }


}

function displayResult(){
    $("#next").hide()
    console.log("End of Quiz")
    // display the total result in the DOM
    quizContainer.innerHTML = `<div class="endgame" >End of Game.<br> Your score is ${score} out of ${myQuestions.length}.</div>`;
}


function displayQuestion(questionNumber) {
        const answers = [];
        let question = myQuestions[questionNumber]
        for(var answer in question.answers){
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
                   ` ;
      }

    
 const myQuestions = [
    { id: 1,
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
    id: 2,
    question: "Priest has two Sorcerer's Apprentices on board and two Shadowforms in hand. <br> How many times can he use Hero Power this turn?",
    answers: {
        a: "3",
        b: "2",
        c: "1",
        d: "4"
    },
    correctAnswer: "a"
},

{
    id: 3,
    question: "Who developed Hearthstone?",
    answers: {
        a: "Blizzard Entertainment",
        b: "Riot Games",
        c: "EA Games",
        d: "Epic Games"
    },
    correctAnswer: "a"
},

{
    id: 4,
    question: "How many cards are in a deck?",
    answers: {
        a: "30",
        b: "25",
        c: "28",
        d: "18"
    },
    correctAnswer: "a"
},
{   id: 5,
    question: "How many types of cards are there?",
    answers: {
        a: "4",
        b: "6",
        c: "8",
        d: "5"
    },
    correctAnswer: "a"
},

{   id: 6,
    question: "What is the rarest card?",
    answers: {
        a: "Legendary",
        b: "Rare",
        c: "Epic",
        d: "Common"
    },
    correctAnswer: "a"
},

{   id: 7,
    question: " True or False : The Assassinate card can destroy a minion with Divine Shield.",
    answers: {
        a: "True",
        b: "False"
    },
    correctAnswer: "a"
},

{   id: 8,
    question: " True or False : You can increase the damage of Eye for an Eye with Spellpower.",
    answers: {
        a: "True",
        b: "False"
    },
    correctAnswer: "a"
},

{   id: 9,
    question: " True or False : Crazed Alchemist's battlecry can destroy a minion with 0 Attack. ",
    answers: {
        a: "True",
        b: "False"
    },
    correctAnswer: "a"
},

{   id: 10,
    question: "Mage has Spellbender secret readied. Opponent Rogue plays Shadowstept.",
    answers: {
        a: "Spellbender Minion will return to Mage's hand",
        b: "Spellbender Minion will return to Rogue's hand.",
        c: " The secret will not trigger.",
        d: "Mage incurs -10 damage."
    },
    correctAnswer: "a"
},

{   id: 11,
    question: "Who says Put this apple on your head?",
    answers: {
        a: "Knife Juggler",
        b: "Big Game Hunter",
        c: "Northshire Cleric",
        d: "Mad Bomber"
    },
    correctAnswer: "a"
},

{   id: 12,
    question: " Priest gains control of Paladin's minion with Blessing of Wisdom on it. Who will draw a card if this minion attacks?",
    answers: {
        a: "Paladin",
        b: "Both",
        c: "None"
    },
    correctAnswer: "a"
},

{   id: 13,
    question: " Priest takes control of an enemy minion, then Rogue casts Sap on it.",
    answers: {
        a: "It will return to Priest's hand",
        b: "It will return to Rogue's hand.",
        c: "Will take damage.",
        d: "Nothing happens."
    },
    correctAnswer: "a"
},

{   id: 14,
    question: " True or False : The Hunter's Snipe will trigger when opponent casts Animal Companion.",
    answers: {   
        a: "False",
        b: "True"
        
    },
    correctAnswer: "b"
}

];
