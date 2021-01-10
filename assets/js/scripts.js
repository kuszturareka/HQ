let quiz;

$(document).ready(function (){
    $("#quiz-container").toggle();
    $("#start-btn").onclick(function(){
        $("landing-page", "#quiz-container").toggle();
    });
    
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function (e){
            selectAnswer(e.target.dataset.nextQuestion);
        });
    }
});