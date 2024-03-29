let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital city of India?",
        answers: ["Mumbai", "Kolkata", "Chennai", "Delhi"],
        correctAnswer: "Delhi"
    },
    {
        question: "Which city is known for the Red Fort and Jama Masjid?",
        answers: ["Jaipur", "Agra", "Hyderabad", "Delhi"],
        correctAnswer: "Delhi"
    },
    {
        question: "In which city is the India Gate located?",
        answers: ["Bangalore", "Ahmedabad", "Pune", "Delhi"],
        correctAnswer: "Delhi"
    },
    {
        question: "Where is the Lotus Temple situated?",
        answers: ["Lucknow", "Chandigarh", "Bhopal", "Delhi"],
        correctAnswer: "Delhi"
    },
    {
        question: "Which city hosts the Rashtrapati Bhavan?",
        answers: ["Kolkata", "Patna", "Mumbai", "Delhi"],
        correctAnswer: "Delhi"
    },
    {
        question: "Where is the Qutub Minar located?",
        answers: ["Chennai", "Jaipur", "Hyderabad", "Delhi"],
        correctAnswer: "Delhi"
    },
    {
        question: "In which city is the Akshardham Temple situated?",
        answers: ["Ahmedabad", "Surat", "Nagpur", "Delhi"],
        correctAnswer: "Delhi"
    },
    {
        question: "Which city houses the National Museum of India?",
        answers: ["Kolkata", "Mumbai", "Bangalore", "Delhi"],
        correctAnswer: "Delhi"
    },
    {
        question: "Where is the Humayun's Tomb located?",
        answers: ["Agra", "Lucknow", "Kanpur", "Delhi"],
        correctAnswer: "Delhi"
    },
    {
        question: "Which city is famous for its Chandni Chowk market?",
        answers: ["Varanasi", "Indore", "Jaipur", "Delhi"],
        correctAnswer: "Delhi"
    }
];

function checkAnswer(btn) {
    const selectedAnswer = btn.textContent;
    const correctAnswer = questions[currentQuestion].answers[3]; // Delhi is always the fourth option
    const answerButtons = document.querySelectorAll('.btn');

    if (selectedAnswer === correctAnswer) {
        score++;
        document.querySelector('.score').textContent = score;
        btn.style.backgroundColor = 'green';
    } else {
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i].textContent === correctAnswer) {
                answerButtons[i].style.backgroundColor = 'green';
            }
        }
        btn.style.backgroundColor = 'red';
    }

    // Disable buttons after an answer is selected
    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        const questionElement = document.getElementById('question');
        questionElement.textContent = `${questions[currentQuestion].question}`;
        const answerButtons = document.querySelectorAll('.btn');
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].textContent = questions[currentQuestion].answers[i];
            answerButtons[i].style.backgroundColor = ''; // Reset button colors
            answerButtons[i].disabled = false; // Enable buttons for the next question
        }
        // Update the progress
        updateProgress();
    } else {
        alert(`Quiz finished! Your final score is: ${score}`);
        // You can add further logic here, such as displaying a message or resetting the quiz
    }
    clearInterval(timeinterval)
    startTimer(20)
}

// Function to update the progress
function updateProgress() {
    const progressElement = document.getElementById('appno');
    progressElement.textContent = `${currentQuestion + 1}/${questions.length}`;
}
const timer = document.getElementById('appno');
let timeleft;
let timeinterval;

// Function to start the timer
function startTimer(duration) {
    timeleft = duration;
    timer.textContent = `${timeleft}`;
    timeleft--;
    timeinterval = setInterval(updatetime, 1000);
}

// Function to update the timer
function updatetime() {
    console.log(timeleft)
    if (timeleft > 0) {
        timer.textContent = `${timeleft}`;
        timeleft--;
    } else {
        clearInterval(timeinterval);
        timer.innerHTML = `times up`;
        nextQuestion()
    }
}

// Display the first question when the page loads
updateProgress();

startTimer(20);