$(document).ready(function () {

    let question = $("p.question")
    let answer = $("p.answer")
    let answerTwo = $("p.answerB")
    let answerThree = $("p.answerC")
    let begin = $("p.start")
    let timer = $("p.timer")
    let number = 6;
    let intervalId;
    let wrongAnswer = $("p.wrongAnswer")

    function start() {
        begin.append("<button>Start</button>")
    }
    start();

    begin.on("click", function () {
        begin.hide();
        roundOne();
        question.append("question 1");
        answer.append("<p>1. Answer</p>")
        answerTwo.append("<p>2. Answer1</p>")
        answerThree.append("<p>3. Answer3</p>")


        answer.click(function () {
            stop();
            $("p").empty();
            answer.append("<p>wrong!</p>")
            answer.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        });


        answerTwo.click(function () {
            $("p").empty();
            answerTwo.append("<p>Correct!</p>")
            answerTwo.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
            roundOne();
        });
        answerThree.click(function () {
            $("p").empty();
            answerThree.append("<p>wrong!</p>")
            answerThree.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
            roundOne();
        });
    });



    function phaseOne() {
        question.append("question 1");
        answer.append("<p>1. Answer</p>")
        answerTwo.append("<p>2. Answer1</p>")
        answerThree.append("<p>3. Answer3</p>")

        answer.click(function () {
            $("p").empty();
            answer.append("<p>wrong!</p>")
            answer.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        });
    }


    function phaseTwo() {
        question.append("Phase Two Questions");
        answer.append("<p>1. Phase Two Answer</p>");
        answerTwo.append("<p>2. Phase Two Answer1</p>");
        answerThree.append("<p>3. Phase Two Answer3</p>");

        answer.click(function () {
            $("p").empty();
            answer.append("<p>wrong!</p>")
            answer.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        });
    }



    function stop() {
        clearInterval(intervalId);
    }



    function roundOne() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        number--;
        timer.text(number);
        if (number === 0) {
            stop();
            $("p").empty();
            
        }
    }


    function roundTwo() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementTwo, 1000);
        phaseTwo();
    }
    function decrementTwo() {
        number--;
        timer.text(number);
        if (number === 0) {
            stop();
            $("p").empty();
            phaseThree();
        }
    }
});
