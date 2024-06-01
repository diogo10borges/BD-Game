let timer;
let timeLeft = 300; // 5 minutes

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
            alert("Time's up! Showing more images...");
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
    return answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
        alert("Player 1's answer is incorrect.");
    }

    if (player2Answer1 === correctAnswerp2) {
        correctCount++;
    } else {
        alert("Player 2's answer is incorrect.");
    }

    if (correctCount === 2) {
        alert("Both answers are correct! Now answer the following question.");
        // Proceed to next question
        askNextQuestion();
    }
}


function loadMoreImages() {
    timeLeft = 180; // 3 minutes
    startTimer();
    // Placeholder: Load the additional images
    document.getElementById('player1-image1').src = 'T1-Cro1.png'; // Replace with actual image source
    document.getElementById('player1-image2').src = 'T1-Cro2.png';
    document.getElementById('player2-image1').src = 'T1-Arg1.png';
    document.getElementById('player2-image2').src = 'T1-Arg2.png';
}

function askNextQuestion() {
    // Placeholder: Ask the next question and check the answer
    const answer = prompt("What is the country you need to answer to advance?");
    if (answer.trim().toLowerCase() === "france") {
        alert("Correct! Next question.");
        askRegionQuestion();
    } else {
        alert("Incorrect! Try again.");
    }
}

function askRegionQuestion() {
    // Placeholder: Ask the region question and check the answer
    const regionAnswer = prompt("Enter a region of France to advance.");
    if (regionAnswer.trim().toLowerCase() === "ile-de-france") { // Example region
        alert("Correct! Final question.");
        askCityQuestion();
    } else {
        alert("Incorrect! Try again.");
    }
}

function askCityQuestion() {
    // Placeholder: Ask the final city question and check the answer
    const cityAnswer = prompt("Enter the name of a French city to finish the game.");
    if (cityAnswer.trim().toLowerCase() === "paris") { // Example city
        alert("Congratulations! You've completed the quiz.");
    } else {
        alert("Incorrect! Try again.");
    }
}
