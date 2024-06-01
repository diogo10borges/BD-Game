let timer;
let timeLeft = 20; // 5 minutes

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    startTimer();
    loadImages();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Para ajudar vos têm aqui as imagens sem desfoque...");
            // Show more images
            loadMoreImages();
        }
    }, 1000);
}

function loadImages() {
    // Placeholder: Load the images dynamically
    document.getElementById('player1-image1').src = 'T1-Arg1.png'; // Replace with actual image source
    document.getElementById('player1-image2').src = 'T1-Arg2.png';
    document.getElementById('player2-image1').src = 'T1-Cro1.png';
    document.getElementById('player2-image2').src = 'T1-Cro2.png';
}

function normalizeAnswer(answer) {
    return answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, " ");
}

function checkAnswers() {
    const player1Answer1 = normalizeAnswer(document.getElementById('player1-answer1').value.trim());
    const player2Answer1 = normalizeAnswer(document.getElementById('player2-answer1').value.trim());

    const correctAnswerp1 = "argentina";
    const correctAnswerp2 = "croacia";

    let correctCount = 0;

    if (player1Answer1 === correctAnswerp1) {
        correctCount++;
    } else {
        alert("O país do jogador 1 está incorreto.");
    }

    if (player2Answer1 === correctAnswerp2) {
        correctCount++;
    } else {
        alert("O país do jogador 2 está incorreto");
    }

    if (correctCount === 2) {
        alert("Acertaste nos 2 países! Avança para a próxima localização.");
        clearInterval(timer); // Stop the timer
        // Proceed to next question
        askNextQuestion();
    }
}


function loadMoreImages() {
    // Placeholder: Load the additional images
    document.getElementById('player1-image1').src = 'T1-Cro1.png'; // Replace with actual image source
    document.getElementById('player1-image2').src = 'T1-Cro2.png';
    document.getElementById('player2-image1').src = 'T1-Arg1.png';
    document.getElementById('player2-image2').src = 'T1-Arg2.png';
}

// function askNextQuestion() {
//     // Placeholder: Ask the next question and check the answer
//     const answer = prompt("Agora que já sabem onde estão vão ter que se encontrar num outro país. Esse país tem uma relação particular com os países onde vocês se encontram relativamente ao campeonato mundial de futebol.");
//     if (normalizeAnswer(answer) === "franca") {
//         alert("Correto! Próximo destino.");
//         askRegionQuestion();
//     } else {
//         alert("Incorreto! Tenta de novo.");
//     }
// }
function askNextQuestion() {
    document.getElementById('next-question').style.display = 'block';
    document.getElementById('question-text').textContent = "Agora que já sabem onde estão vão ter que se encontrar num outro país. Esse país tem uma relação particular com os países onde vocês se encontram relativamente ao campeonato mundial de futebol.";
    document.getElementById('next-answer').value = '';
    document.getElementById('next-answer').oninput = function() {
        submitNextAnswer();
    };
}

function submitNextAnswer() {
    const nextQuestionAnswer = document.getElementById('next-answer').value.trim();
    const normalizedAnswer = normalizeAnswer(nextQuestionAnswer);

    const correctAnswer = "franca";

    if (normalizedAnswer === correctAnswer) {
        alert("Correto! Próximo destino.");
        document.getElementById('next-question').style.display = 'none';
        askRegionQuestion();
    } else {
        alert("Incorreto! Tenta de novo.");
    }
}

// function askRegionQuestion() {
//     // Placeholder: Ask the region question and check the answer
//     const regionAnswer = prompt("Agora que estão em terras gaulesas vão ter que descobrir para que região administrativa se deslocar e como no ... é que está a virtude é para aí que irão.");
//     if (normalizeAnswer(regionAnswer) === "centre val de loire") { // Example region
//         alert("Correto! Próximo e destino final.");
//         askCityQuestion();
//     } else {
//         alert("Incorreto! Tenta de novo.");
//     }
// }

function askRegionQuestion() {
    document.getElementById('next-question').style.display = 'block';
    document.getElementById('question-text').textContent = "Agora que estão em terras gaulesas vão ter que descobrir para que região administrativa se deslocar e como no ... é que está a virtude é para aí que irão.";
    document.getElementById('next-answer').value = '';
    document.getElementById('next-answer').oninput = function() {
        submitRegionAnswer();
    };
}
function submitRegionAnswer() {
    const regionAnswer = document.getElementById('next-answer').value.trim();
    const normalizedAnswer = normalizeAnswer(regionAnswer);
    const normalizedAnswerWithoutHyphens = normalizeAnswerWithoutHyphens(regionAnswer);

    const correctRegion = "centre val de loire"; // Example region
    const normalizedCorrectRegion = normalizeAnswer(correctRegion);
    const normalizedCorrectRegionWithoutHyphens = normalizeAnswerWithoutHyphens(correctRegion);

    if (normalizedAnswer === normalizedCorrectRegion || normalizedAnswerWithoutHyphens === normalizedCorrectRegionWithoutHyphens) {
        alert("Correto! Próximo e destino final.");
        document.getElementById('next-question').style.display = 'none';
        askCityQuestion();
    } else {
        alert("Incorreto! Tenta de novo.");
    }
}

// function askCityQuestion() {
//     // Placeholder: Ask the final city question and check the answer
//     const cityAnswer = prompt("O vosso destino final é uma cidade que tem como principal monumento uma catedral com nome igual a uma equipa de futebol que venceu por 10 ou mais vezes o título de campeão francês de futebol.");
//     if (normalizeAnswer(cityAnswer) === "bourges") { // Example city
//         alert("Parabéns! Chegaste ao destino, comprova-o ao Game Master.");
//     } else {
//         alert("Incorreto! Tenta de novo.");
//     }
// }
function askCityQuestion() {
    document.getElementById('next-question').style.display = 'block';
    document.getElementById('question-text').textContent = "O vosso destino final é uma cidade que tem como principal monumento uma catedral com nome igual a uma equipa de futebol que venceu por 10 ou mais vezes o título de campeão francês de futebol.";
    document.getElementById('next-answer').value = '';
    document.getElementById('next-answer').oninput = function() {
        submitCityAnswer();
    };
}

function submitCityAnswer() {
    const cityAnswer = document.getElementById('next-answer').value.trim();
    const normalizedAnswer = normalizeAnswer(cityAnswer);

    const correctCity = "bourges"; // Example city

    if (normalizedAnswer === correctCity) {
        alert("Parabéns! Chegaste ao destino, comprova-o ao Game Master.");
    } else {
        alert("Incorreto! Tenta de novo.");
    }
}
