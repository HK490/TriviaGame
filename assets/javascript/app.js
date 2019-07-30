$(document).ready(function () {

    let question = $("p.question")
    let answer = $("p.answer")
    let answerTwo = $("p.answerB")
    let answerThree = $("p.answerC")
    let begin = $("p.start")
    let timer = $("p.timer")
    let number = 6;
    let intervalId;

    function start() {
        begin.append("<button>Start</button>")
    }
    start();

    let beginAgain = begin.on("click", function () {
        begin.hide();

        function startOver() {
            question = $("p.question")
            answer = $("p.answer")
            answerTwo = $("p.answerB")
            answerThree = $("p.answerC")
            begin = $("p.start")
            timer = $("p.timer")
            number = 6;
            intervalId;

            beginAgain();

        }

        function result() {
            question.append("<button>Start Over</button>")
            question.on("click", function () {
                startOver();
            })
            answer.append("Correct:")
            answerTwo.append("Incorrect:")
            answerThree.append("GAME OVER")
        }

        function stop() {
            clearInterval(intervalId);
        }
        function wrongAnswer() {
            if (number === 0) {
                stop()
                $("p").empty();
                wrongAnswerOptATwo();
            }
        }

        function roundOneA() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        function decrement() {
            number--;
            timer.text(number);
            if (number === 0) {
                stop();
                $("p").empty();
                wrongAnswer();
            }
        }




        function correctAnswerOptAOne() {
            $("p").empty();
            timerForQAOne();
            question.append("<p>Correct!</p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        let numberTwentyFour = 6
        function timerForQAOne() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementAA, 1000);
        }
        function decrementAA() {
            numberTwentyFour--;
            timer.text(numberTwentyFour);
            if (numberTwentyFour === 0) {
                stop()
                $("p").empty();
                questionOptATwo();
            }
        }
        function questionOptATwo() {
            $("p").empty();
            timerForQATwo();
            question.text("Question1")
            answer.text(" A One")
            answerTwo.text("A Two")
            answerThree.text("A Three")
        }
        let numberTwentyFive = 6
        function timerForQATwo() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementCC, 1000);
        }
        function decrementCC() {
            numberTwentyFive--;
            timer.text(numberTwentyFive);
            if (numberTwentyFive === 0) {
                stop()
                $("p").empty();
                wrongAnswerOptATwo();
            }
        }
        function wrongAnswerOptATwo() {
            $("p").empty();
            timerForQAThree();
            question.append("<p>Time's Up</p>")
            question.append("Correct Answer Is")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        let numberTwentySix = 6
        function timerForQAThree() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementDD, 1000);
        }
        function decrementDD() {
            numberTwentySix--;
            timer.text(numberTwentySix);
            if (numberTwentySix === 0) {
                stop()
                $("p").empty();
                questionOptAThree();
            }
        }
        function questionOptAThree() {
            $("p").empty();
            timerForQAFour();
            question.text("Question1")
            answer.text(" A One")
            answerTwo.text("A Two")
            answerThree.text("A Three")
        }
        let numberTwentySeven = 6
        function timerForQAFour() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementEE, 1000);
        }
        function decrementEE() {
            numberTwentySeven--;
            timer.text(numberTwentySeven);
            if (numberTwentySeven === 0) {
                stop()
                $("p").empty();
                wrongAnswerOptAFour();
            }
        }

        function wrongAnswerOptAFour() {
            $("p").empty();
            timerForQAFive();
            question.append("<p>Time's Up</p>")
            question.append("Correct Answer Is")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        let numberTwentyEight = 6
        function timerForQAFive() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementFF, 1000);
        }
        function decrementFF() {
            numberTwentyEight--;
            timer.text(numberTwentyEight);
            if (numberTwentyEight === 0) {
                stop()
                $("p").empty();
                result();
            }
        }


        function clickCorrectAnswerOptAOne() {
            $("p").empty();
            clickTimerForQAOne();
            answerTwo.append("Correct!")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        };
        let numberTwentyNine = 6
        function clickTimerForQAOne() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementGG, 1000);
        };
        function decrementGG() {
            numberTwentyNine--;
            timer.text(numberTwentyNine);
            if (numberTwentyNine === 0) {
                stop();
                $("p").empty();
                clickQuestionOptATwo();
            }
        };
        function clickQuestionOptATwo() {
            $("p").empty();
            clickTimerForQATwo();
            question.text("Question clicked")
            answer.text(" answer clicked")
            answerTwo.text("answer clicked")
            answerThree.text("answer clicked")
        };
        let numberThirty = 6
        function clickTimerForQATwo() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementHH, 1000);
        };
        function decrementHH() {
            numberThirty--;
            timer.text(numberThirty);
            if (numberThirty === 0) {
                stop()
                $("p").empty();
                clickCorrectAnswerOptATwo();
            }
        };

        function clickCorrectAnswerOptATwo() {
            $("p").empty();
            clickTimerForQAThree();
            answerTwo.append("Correct Answer")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        };
        let numberThirtyOne = 6
        function clickTimerForQAThree() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementII, 1000);
        };
        function decrementII() {
            numberThirtyOne--;
            timer.text(numberThirtyOne);
            if (numberThirtyOne === 0) {
                stop();
                $("p").empty();
                result();
            }
        };

        function clickCorrectAnswerOptAThree() {
            $("p").empty();
            clickTimerForQASix();
            answerTwo.append("Correct Answer")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        };
        let numberThirtyTwo = 6
        function clickTimerForQASix() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementJJ, 1000);
        };
        function decrementJJ() {
            numberThirtyTwo--;
            timer.text(numberThirtyTwo);
            if (numberThirtyTwo === 0) {
                stop();
                $("p").empty();
                result();
            }
        };




        roundOneA();
        question.text("Question")
        answer.text("One")
        answerTwo.text("Two")
        answerThree.text("Three")
        answer.click(function () {
            correctAnswerOptAOne();
            answer.off('click').click(function () {
                clickCorrectAnswerOptAOne();
                answer.off('click').click(function () {
                    clickCorrectAnswerOptAThree();

                });

            });
        });

















        function wrongAnswerOptBOne() {
            $("p").empty();
            timerForQBOne();
            question.append("<p>Wrong Answer! wrongAnswerOptBOne</p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        let numberSix = 6
        function timerForQBOne() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementF, 1000);
        }
        function decrementF() {
            numberSix--;
            timer.text(numberSix);
            if (numberSix === 0) {
                stop()
                $("p").empty();
                questionOptBTwo();
            }
        }
        function questionOptBTwo() {
            $("p").empty();
            timerForQBTwo();
            question.text("Question2")
            answer.text(" B One")
            answerTwo.text("B Two")
            answerThree.text("B Three")
        }
        let numberSeven = 6
        function timerForQBTwo() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementG, 1000);
        }
        function decrementG() {
            numberSeven--;
            timer.text(numberSeven);
            if (numberSeven === 0) {
                stop()
                $("p").empty();
                wrongAnswerOptBTwo();
            }
        }
        function wrongAnswerOptBTwo() {
            $("p").empty();
            timerForQBThree();
            question.append("<p>Wrong Answer! wrongAnswerOptBTwo</p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        let numberEight = 6
        function timerForQBThree() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementH, 1000);
        }
        function decrementH() {
            numberEight--;
            timer.text(numberEight);
            if (numberEight === 0) {
                stop()
                $("p").empty();
                questionOptBThree();
            }
        }
        function questionOptBThree() {
            $("p").empty();
            timerForQBFour();
            question.text("Question3")
            answer.text(" C One")
            answerTwo.text("C Two")
            answerThree.text("C Three")
        }
        let numberNine = 6
        function timerForQBFour() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementI, 1000);
        }
        function decrementI() {
            numberNine--;
            timer.text(numberNine);
            if (numberNine === 0) {
                stop()
                $("p").empty();
                wrongAnswerOptBFour();
            }
        }

        function wrongAnswerOptBFour() {
            $("p").empty();
            timerForQBFive();
            question.append("<p>Wrong Answer! wrongAnswerOptBFour</p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        let numberTen = 6
        function timerForQBFive() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementJ, 1000);
        }
        function decrementJ() {
            numberTen--;
            timer.text(numberTen);
            if (numberTen === 0) {
                stop()
                $("p").empty();
                result();
            }
        }


        function clickWrongAnswerOptBOne() {
            $("p").empty();
            clickTimerForQBOne();
            answer.append("wrong answer")
            answerTwo.append("Correct Answer Is clickWrongAnswerOptBOne")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        };
        let numberEleven = 6
        function clickTimerForQBOne() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementK, 1000);
        };
        function decrementK() {
            numberEleven--;
            timer.text(numberEleven);
            if (numberEleven === 0) {
                stop();
                $("p").empty();
                clickQuestionOptBTwo();
            }
        };
        function clickQuestionOptBTwo() {
            $("p").empty();
            clickTimerForQBTwo();
            question.text("Question clicked")
            answer.text(" answer clicked")
            answerTwo.text("answer clicked")
            answerThree.text("answer clicked")
        };
        let numberTwelve = 6
        function clickTimerForQBTwo() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementL, 1000);
        };
        function decrementL() {
            numberTwelve--;
            timer.text(numberTwelve);
            if (numberTwelve === 0) {
                stop()
                $("p").empty();
                clickWrongAnswerOptBTwo();
            }
        };

        function clickWrongAnswerOptBTwo() {
            $("p").empty();
            clickTimerForQBThree();
            answer.append("wrong answer")
            answerTwo.append("Correct Answer Is clickWrongAnswerOptBOne")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        };
        let numberThirteen = 6
        function clickTimerForQBThree() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementM, 1000);
        };
        function decrementM() {
            numberThirteen--;
            timer.text(numberThirteen);
            if (numberThirteen === 0) {
                stop();
                $("p").empty();
                result();
            }
        };

        function clickWrongAnswerOptBThree() {
            $("p").empty();
            clickTimerForQBSix();
            answer.append("Wrong Answer")
            answerTwo.append("Correct Answer Is")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        };
        let numberFourteen = 6
        function clickTimerForQBSix() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementN, 1000);
        };
        function decrementN() {
            numberFourteen--;
            timer.text(numberFourteen);
            if (numberFourteen === 0) {
                stop();
                $("p").empty();
                result();
            }
        };

        answerTwo.click(function () {
            wrongAnswerOptBOne();
            answerTwo.off('click').click(function () {
                clickWrongAnswerOptBOne();
                answerTwo.off('click').click(function () {
                    clickWrongAnswerOptBThree();

                });

            });
        });












        function wrongAnswerOptCOne() {
            $("p").empty();
            timerForQCOne();
            question.append("<p>Wrong Answer!</p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        let numberfifteen = 6
        function timerForQCOne() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementO, 1000);
        }
        function decrementO() {
            numberfifteen--;
            timer.text(numberfifteen);
            if (numberfifteen === 0) {
                stop()
                $("p").empty();
                questionOptCTwo();
            }
        }
        function questionOptCTwo() {
            $("p").empty();
            timerForQCTwo();
            question.text("Question3")
            answer.text(" C One")
            answerTwo.text("C Two")
            answerThree.text("C Three")
        }
        let numberSixteen = 6
        function timerForQCTwo() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementP, 1000);
        }
        function decrementP() {
            numberSixteen--;
            timer.text(numberSixteen);
            if (numberSixteen === 0) {
                stop()
                $("p").empty();
                wrongAnswerOptCTwo();
            }
        }
        function wrongAnswerOptCTwo() {
            $("p").empty();
            timerForQCThree();
            question.append("<p>Wrong Answer! </p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        let numberSeventeen = 6
        function timerForQCThree() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementQ, 1000);
        }
        function decrementQ() {
            numberSeventeen--;
            timer.text(numberSeventeen);
            if (numberSeventeen === 0) {
                stop()
                $("p").empty();
                questionOptCThree();
            }
        }
        function questionOptCThree() {
            $("p").empty();
            timerForQCFour();
            question.text("Question3")
            answer.text(" C One")
            answerTwo.text("C Two")
            answerThree.text("C Three")
        }
        let numberEighteen = 6
        function timerForQCFour() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementR, 1000);
        }
        function decrementR() {
            numberEighteen--;
            timer.text(numberEighteen);
            if (numberEighteen === 0) {
                stop()
                $("p").empty();
                wrongAnswerOptCFour();
            }
        }

        function wrongAnswerOptCFour() {
            $("p").empty();
            timerForQCFive();
            question.append("<p>Wrong Answer! </p>")
            question.append("<img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        }
        let numberNineteen = 6
        function timerForQCFive() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementS, 1000);
        }
        function decrementS() {
            numberNineteen--;
            timer.text(numberNineteen);
            if (numberNineteen === 0) {
                stop()
                $("p").empty();
                result();
            }
        }


        function clickWrongAnswerOptCOne() {
            $("p").empty();
            clickTimerForQCOne();
            answer.append("wrong answer")
            answerTwo.append("Correct Answer Is ")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        };
        let numberTwenty = 6
        function clickTimerForQCOne() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementT, 1000);
        };
        function decrementT() {
            numberTwenty--;
            timer.text(numberTwenty);
            if (numberTwenty === 0) {
                stop();
                $("p").empty();
                clickQuestionOptCTwo();
            }
        };
        function clickQuestionOptCTwo() {
            $("p").empty();
            clickTimerForQCTwo();
            question.text("Question clicked")
            answer.text(" answer clicked")
            answerTwo.text("answer clicked")
            answerThree.text("answer clicked")
        };
        let numberTwentyOne = 6
        function clickTimerForQCTwo() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementU, 1000);
        };
        function decrementU() {
            numberTwentyOne--;
            timer.text(numberTwentyOne);
            if (numberTwentyOne === 0) {
                stop()
                $("p").empty();
                clickWrongAnswerOptCTwo();
            }
        };

        function clickWrongAnswerOptCTwo() {
            $("p").empty();
            clickTimerForQCThree();
            answer.append("wrong answer")
            answerTwo.append("Correct Answer Is")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        };
        let numberTwentyTwo = 6
        function clickTimerForQCThree() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementV, 1000);
        };
        function decrementV() {
            numberTwentyTwo--;
            timer.text(numberTwentyTwo);
            if (numberTwentyTwo === 0) {
                stop();
                $("p").empty();
                result();
            }
        };

        function clickWrongAnswerOptCThree() {
            $("p").empty();
            clickTimerForQCSix();
            answer.append("Wrong Answer")
            answerTwo.append("Correct Answer Is")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRCWp3AhLRFZSCbz-qxDikRD4qST0DUFvxQcNqxRqMek8JHQZZQ>")
        };
        let numberTwentyThree = 6
        function clickTimerForQCSix() {
            clearInterval(intervalId);
            intervalId = setInterval(decrementW, 1000);
        };
        function decrementW() {
            numberTwentyThree--;
            timer.text(numberTwentyThree);
            if (numberTwentyThree === 0) {
                stop();
                $("p").empty();
                result();
            }
        };

        answerThree.click(function () {
            wrongAnswerOptCOne();
            answerThree.off('click').click(function () {
                clickWrongAnswerOptCOne();
                answerThree.off('click').click(function () {
                    clickWrongAnswerOptCThree();

                });

            });
        });










    });











});