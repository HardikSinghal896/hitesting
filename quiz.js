const questions = [{
    question: "Tipu sultan was the ruler of",
    optionA: "Hyderabad",
    optionB: "Madurai",
    optionC: "Vijayanagar",
    optionD: "Mysore",
    correctOption: "optionA",
},
{
    question: "Tipu sultan was the",
    optionA: "Hyderabad",
    optionB: "Madurai",
    optionC: "Vijayanagar",
    optionD: "Mysore",
    correctOption: "optionC",   
}];

let correctanswer = 0;

function nextquestion() {
    if (correctanswer < questions.length - 1) {
        correctanswer++;
        displayQuestion();
    } else {
        alert('You have completed all Questions');
    }
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[correctanswer].question;
}
