let startTime;
let playerName;
let timer;
let timeLeft = 60*5; // 5 minutes

const players = [
    {
        id: "player1",
        question: "Agora que já sabem onde estão vão ter que se encontrar num outro país. Esse pais tem uma relação particular com os países onde vocês se encontrar relativamente ao campeonato mundial de futebol.",
        images: ["T1-Arg1.png", "T1-Arg2.png","T1-Cro1.png", "T1-Cro2.png"],
        correctAnswer: ["argentina", "croacia"]
    },
    {
        id: "player2",
        question: "Agora que já sabem onde estão vão ter que se encontrar num outro país. O país que têm que descobrir está relacionado com aqueles onde vocês se encontram pelo seu passado.",
        images: ["T5-Sen1.png", "T5-Sen2.png","T5-Tun1.png", "T5-Tun2.png"],
        correctAnswer: ["senegal", "tunisia"]
    },
    {
        id: "player3",
        question: "Agora que já sabem onde estão vão ter que se encontrar num outro país. Este país que têm que adivinhar formou em conjunto com os países onde se encontram e mais 3 outros uma importante comunidade e tem a particularidade de ser fronteira com um deles e partilhar a lingua com esse mesmo país.",
        images: ["T3-Bel1.png", "T3-Bel2.png","T3-Hol1.png", "T3-Hol2.png"],
        correctAnswer: ["belgica", "holanda"]
    },
    {
        id: "player4",
        question: "Agora que já sabem onde estão vão ter que se encontrar num outro país. Este país tem uma característica igual no nome com os países onde vocês se encontram, para além disso também faz fronteira com um deles.",
        images: ["T4-It1.png", "T4-It2.png","T4-Mex1.png", "T4-Mex2.png"],
        correctAnswer: ["italia", "mexico"]
    },
    {
        id: "player5",
        question: "Agora que já sabem onde estão vão ter que se encontrar num outro país. Este país tem a particularidade de ser ligeiramente mais pequeno que os países onde vocês estão (não incluindo os seus territórios ultramarinos).",
        images: ["T2-Bots1.png", "T2-Bots2.png","T2-Ken1.png", "T2-Ken2.png"],
        correctAnswer: ["botsuana", "quenia"]
    }
];



function startQuiz() {
    // Get the selected player's ID
    const playerId = document.getElementById('player-select').value;
    playerName = document.getElementById('player-select').options[document.getElementById('player-select').selectedIndex].text;

    // Find the corresponding player object from the array
    currentPlayer = players.find(player => player.id === playerId);
    // Start the timer
    startTime = new Date().getTime();
    // Hide the intro and display the quiz
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    startTimer();
    // loadImages();
    // Display the player's question and images
    displayPlayerQuestion();
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

// function loadImages() {
//     // Placeholder: Load the images dynamically
//     document.getElementById('player1-image1').src = 'T1-Arg1.png'; // Replace with actual image source
//     document.getElementById('player1-image2').src = 'T1-Arg2.png';
//     document.getElementById('player2-image1').src = 'T1-Cro1.png';
//     document.getElementById('player2-image2').src = 'T1-Cro2.png';
// }

function displayPlayerQuestion() {
                                    
    // Display player's images
    alert(`Image ${currentPlayer.images[0].replace('.png', '_blurred.png')}`)
    document.getElementById('player1-image1').src = currentPlayer.images[0].replace('.png', '_blurred.png');
    document.getElementById('player1-image2').src = currentPlayer.images[1].replace('.png', '_blurred.png');
    document.getElementById('player2-image1').src = currentPlayer.images[2].replace('.png', '_blurred.png');
    document.getElementById('player2-image2').src = currentPlayer.images[3].replace('.png', '_blurred.png');
}

function normalizeAnswer(answer) {
    return answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, " ");
}

function calculateElapsedTime(startTime) {
    const endTime = new Date().getTime();
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;
    const minutes = Math.floor(elapsedTimeInSeconds / 60);
    const seconds = Math.floor(elapsedTimeInSeconds % 60);
    return `${minutes} minutos e ${seconds} segundos`;
}

function checkAnswers() {
    const player1Answer1 = normalizeAnswer(document.getElementById('player1-answer1').value.trim());
    const player2Answer1 = normalizeAnswer(document.getElementById('player2-answer1').value.trim());

    let correctCount = 0;

    if (player1Answer1 === currentPlayer.correctAnswer[0]) {
        correctCount++;
    } else {
        alert("O país do jogador 1 está incorreto.");
    }

    if (player2Answer1 === currentPlayer.correctAnswer[1]) {
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
    document.getElementById('player1-image1').src = currentPlayer.images[0];
    document.getElementById('player1-image2').src = currentPlayer.images[1];
    document.getElementById('player2-image1').src = currentPlayer.images[2];
    document.getElementById('player2-image2').src = currentPlayer.images[3];
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

// function askCityQuestion() {
//     // Placeholder: Ask the final city question and check the answer
//     const cityAnswer = prompt("O vosso destino final é uma cidade que tem como principal monumento uma catedral com nome igual a uma equipa de futebol que venceu por 10 ou mais vezes o título de campeão francês de futebol.");
//     if (normalizeAnswer(cityAnswer) === "bourges") { // Example city
//         alert("Parabéns! Chegaste ao destino, comprova-o ao Game Master.");
//     } else {
//         alert("Incorreto! Tenta de novo.");
//     }
// }

function appendQuestion(questionText, submitFunction) {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    
    const questionParagraph = document.createElement('p');
    questionParagraph.textContent = questionText;
    
    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.classList.add('answer-input');
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Verifica Resposta';
    submitButton.onclick = submitFunction;

    questionContainer.appendChild(questionParagraph);
    questionContainer.appendChild(answerInput);
    questionContainer.appendChild(submitButton);

    document.getElementById('questions').appendChild(questionContainer);
}

function askNextQuestion() {
    const questionText = currentPlayer.question;
    appendQuestion(questionText, submitNextAnswer);
}

function submitNextAnswer() {
    const answerInput = document.querySelector('#questions .question-container:last-child .answer-input');
    const nextQuestionAnswer = answerInput.value.trim();
    const normalizedAnswer = normalizeAnswer(nextQuestionAnswer);

    const correctAnswer = "franca";

    if (normalizedAnswer === correctAnswer) {
        alert("Correto! Próximo destino.");
        askRegionQuestion();
    } else {
        alert("Incorreto! Tenta de novo.");
    }
}

function askRegionQuestion() {
    const questionText = "Agora que estão em terras gaulesas vão ter que descobrir para que região administrativa se deslocar e como no ... é que está a virtude é para aí que irão.";
    appendQuestion(questionText, submitRegionAnswer);
}

function submitRegionAnswer() {
    const answerInput = document.querySelector('#questions .question-container:last-child .answer-input');
    const regionAnswer = answerInput.value.trim();
    const normalizedAnswer = normalizeAnswer(regionAnswer);

    const correctRegion = "centre val de loire"; // Example region
    const normalizedCorrectRegion = normalizeAnswer(correctRegion);

    if (normalizedAnswer === normalizedCorrectRegion) {
        alert("Correto! Próximo e destino final.");
        askCityQuestion();
    } else {
        alert("Incorreto! Tenta de novo.");
    }
}

function askCityQuestion() {
    const questionText = "O vosso destino final é uma cidade que tem como principal monumento uma catedral com nome igual a uma equipa de futebol que venceu por 10 ou mais vezes o título de campeão francês de futebol.";
    appendQuestion(questionText, submitCityAnswer);
}

function submitCityAnswer() {
    const answerInput = document.querySelector('#questions .question-container:last-child .answer-input');
    const cityAnswer = answerInput.value.trim();
    const normalizedAnswer = normalizeAnswer(cityAnswer);

    const correctCity = "bourges"; // Example city

    if (normalizedAnswer === correctCity) {
        const elapsedTime = calculateElapsedTime(startTime);
        alert(`Parabéns, ${playerName}! Chegaste ao destino em ${elapsedTime}. Comprova-o ao Game Master.`);
    } else {
        alert("Incorreto! Tenta de novo.");
    }
}
