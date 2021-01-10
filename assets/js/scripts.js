let quiz;

$(document).ready(function (){
    $("#quiz-container").toggle();
    $("#start-btn").onclick(function(){
        $("landing-page", "#quiz-container").toggle();
    });
    
    for (let i = 0; i < answerButtonRef.length; i++) {
        answerButtonRef[i].addEventListener("click", function (e){
            selectAnswer(e.target.dataset.nextQuestion);
        });
    }
});

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
  {
    question: "Player casts Assasinate on Acolyte of pain. Acolyte's owner will:",
    answers: {
        1: "Draw no cards",
        2: "Draw 1 card.",
        3: "Draw 2 cards",
        4: "Draw 3 cards"
    },
    correctAnswer: "1"
},

{
    question: "Priest has two Sorcerer's Apprentices on board and two Shadowforms in hand. <br> How many times can he use Hero Power this turn?",
    answers: {
        1: "1",
        2: "2",
        3: "3",
        4: "4"
    },
    correctAnswer: "3"
},

{
    question: "Who developed Hearthstone?",
    answers: {
        1: "Riot Games",
        2: "Blizzard Entertainment",
        3: "EA Games",
        4: "Epic Games"
    },
    correctAnswer: "2"
},

{
    question: "How many cards are in a deck?",
    answers: {
        1: "15",
        2: "20",
        3: "28",
        4: "30"
    },
    correctAnswer: "4"
},
{
    question: "How many types of cards are there?",
    answers: {
        1: "4",
        2: "6",
        3: "8",
        4: "5"
    },
    correctAnswer: "1"
},

{
    question: "What is the rarest card?",
    answers: {
        1: "Epic",
        2: "Rare",
        3: "Legendary",
        4: "Common"
    },
    correctAnswer: "3"
},

{
    question: " True or False : The Assassinate card can destroy a minion with Divine Shield.",
    answers: {
        1: "True",
        2: "False"
    },
    correctAnswer: "1"
},

{
    question: " True or False : You can increase the damage of Eye for an Eye with Spellpower.",
    answers: {
        1: "True",
        2: "False"
    },
    correctAnswer: "1"
},

{
    question: " True or False : Crazed Alchemist's battlecry can destroy a minion with 0 Attack. ",
    answers: {
        1: "True",
        2: "False"
    },
    correctAnswer: "1"
},

{
    question: "Mage has Spellbender secret readied. Opponent Rogue plays Shadowstept.",
    answers: {
        1: "Spellbender Minion will return to Mage's hand",
        2: "Spellbender Minion will return to Rogue's hand.",
        3: " The secret will not trigger.",
        4: "Mage incurs -10 damage."
    },
    correctAnswer: "1"
},

{
    question: "Who says Put this apple on your head?",
    answers: {
        1: "Knife Juggler",
        2: "Big Game Hunter",
        3: "Northshire Cleric",
        4: "Mad Bomber"
    },
    correctAnswer: "1"
},

{
    question: " Priest gains control of Paladin's minion with Blessing of Wisdom on it. Who will draw a card if this minion attacks?",
    answers: {
        1: "Paladin",
        2: "Both",
        3: "None"
    },
    correctAnswer: "1"
},

{
    question: " Priest takes control of an enemy minion, then Rogue casts Sap on it.",
    answers: {
        1: "It will return to Rogue's hand",
        2: "It will return to Priest's hand.",
        3: "Will take damage.",
        4: "Nothing happens."
    },
    correctAnswer: "2"
},

{
    question: " True or False : The Hunter's Snipe will trigger when opponent casts Animal Companion.",
    answers: {   
        a: "True",
        b: "False"
    },
    correctAnswer: "b"
}
];






