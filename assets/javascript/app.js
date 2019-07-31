$(document).ready(function () {

    let question = $("p.question")
    let answer = $("p.answer")
    let answerTwo = $("p.answerB")
    let answerThree = $("p.answerC")
    let begin = $("p.start")
    let timer = $("p.timer")
    let number = 6;
    let intervalId;
    // let myCorrectScore = 0
    // let myIncorrectScore = 0

    function start() {
        begin.append("<button>Start</button>")
    }
    start();


    begin.on("click", beginGame);
    $(document).on("click", ".start-over", function () {
        clearInterval(intervalId);
        number = 6;
        beginGame();


    });

    function beginGame() {
        begin.hide();


        // function correctIncorrect() {
        //     if () {
        //         myCorrectScore++;
        //     } else if(number === 0) {
        //         myIncorrectScore++;
        //     }
        // };


        function result() {
            question.append("<button class='start-over'>Start Over</button>")
            answer.append("Correct:" + myCorrectScore)
            answerTwo.append("Incorrect:" + myIncorrectScore)
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
            question.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c9S1gBJPFd9mC6-eDg4lQbNuXIoEF_Egc3VRSnEVyqjBlEvH>")
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
            question.text("Retinal Detachments are common in which of the following")
            answer.text("in high myopes")
            answerTwo.text("after contusion")
            answerThree.text("with melanomas")
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
            question.append("<p>Symptoms of dry eyes include burning sensation and watery eyes</p>")
            question.append("<img src= https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            question.text("Central serious retinothy is a disease of")
            answer.text(" persons between 25 and 50")
            answerTwo.text("elderly persons over 65")
            answerThree.text("persons under the age of 18")
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
            question.append("<p>Central serious retinothy is a disease of persons between 25 and 50</p>")
            question.append("<img src= https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c9S1gBJPFd9mC6-eDg4lQbNuXIoEF_Egc3VRSnEVyqjBlEvH>")
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
            question.text("Central serous retinopathy has a strong association with which of the following")
            answer.text(" Stress")
            answerTwo.text("Water Intake per Day")
            answerThree.text("Diabetes")
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
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c9S1gBJPFd9mC6-eDg4lQbNuXIoEF_Egc3VRSnEVyqjBlEvH>")

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
            answerTwo.append("Correct!")
            answerThree.append("<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c9S1gBJPFd9mC6-eDg4lQbNuXIoEF_Egc3VRSnEVyqjBlEvH>")

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
        question.append("<p>Symptoms of dry eyes include which of the following</p>")
        answer.append(" <p>Burning sensation and watery eyes</p>")
        answerTwo.append("<p>Burning sensation and bleeding of the eyes</p>")
        answerThree.append("<p>Watery eyes and twitching of the eyelid</p>")
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
            question.append("<p>Wrong Answer. Symptoms of dry eyes include burning sensation and watery eyes .</p>")
            question.append("<img src= https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            question.text("Retinal Detachments are common in which of the following")
            answer.text("in high myopes")
            answerTwo.text("after contusion")
            answerThree.text("with melanomas")
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
            question.append("<p>Wrong Answer! Retinal Detachments are common in high myopes.</p>")
            question.append("<img src=https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            question.text("Central serious retinopathy is a disease of")
            answer.text("persons between 25 and 50")
            answerTwo.text("elderly persons over 65")
            answerThree.text("persons under the age of 18")
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
            question.append("<p>Wrong Answer! Central serious retinothy is a disease of persons between 25 and 50.</p>")
            question.append("<img src= https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            answerTwo.append("Retinal Detachments are common in high myopes")
            answerThree.append("<img src=https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            question.text("Central serous retinopathy has a strong association with which of the following")
            answer.text("stress")
            answerTwo.text("Water intake per day")
            answerThree.text("Diabetes")
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
            answerTwo.append("Central serous retinopathy has a strong association with stress")
            answerThree.append("<img src=https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            answerTwo.append("Central serous retinopathy has a strong association with stress")
            answerThree.append("<img src=https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            question.append("<p>Wrong Answer!Symptoms of dry eyes include burning sensation and watery eyes.</p>")
            question.append("<img src= https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            question.text("Retinal Detachments are common in which of the following")
            answer.text("in high myopes")
            answerTwo.text("after contusion")
            answerThree.text("with melanomas")
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
            question.append("<p>Wrong Answer! Retinal Detachments are common in high myopes. </p>")
            question.append("<img src= https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            question.text("Central serious retinothy is a disease of")
            answer.text("persons between 25 and 50")
            answerTwo.text("elderly persons over 65")
            answerThree.text("persons under the age of 18")
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
            question.append("<p>Wrong Answer! Central serious retinothy is a disease of persons between 25 and 50 </p>")
            question.append("<img src=https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            answerTwo.append("Retinal Detachments are common in high myopes")
            answerThree.append("<img src=https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            question.text("Central serous retinopathy has a strong association with which of the following")
            answer.text("Stress")
            answerTwo.text("Water intake per day")
            answerThree.text("Diabetes")
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
            answerTwo.append("Central serious retinopathy is a disease of person between 25 and 50.")
            answerThree.append("<img src=https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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
            answerTwo.append("Central serous retinopathy has a strong association with stress")
            answerThree.append("<img src=https://media.tenor.com/images/b6af2f4aef323a0eea222bf003ef5c17/tenor.gif>")
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

    }

});