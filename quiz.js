const quizData = [
    {
        question: "Which property is used to change the background color of an element in CSS?",
        options: ["background-color","color","bg-color", "fill"],
        answer: "background-color"
    },
    {
        question: "Which of the following is a way to declare a variable in JavaScript? ",
        options: ["var, let, const", "int, float, string", "define, declare, initialize", "variable, constant, temporary"],
        answer: "var, let, const"
    },
    {
        question: "Which attribute is used to specify an alternate text for an image if it cannot be displayed?",
        options: ["src", "alt", "title", "href"],
        answer: "src"
    },
    {
        question: "What does the <meta> tag in HTML provide? ",
        options: ["Styles for the document", "Metadata about the HTML document", "A link to external CSS", "JavaScript functions"],
        answer: "Metadata about the HTML document"
    },
    {
        question: "What does the flex property do in a CSS Flexbox layout?",
        options: ["Aligns items vertically", "Defines how a flex item will grow or shrink", "Adds padding to an item", "Sets the display property to inline"],
        answer: "Defines how a flex item will grow or shrink"
    }
];

let currentQuestionIndex = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;
    const optionsList = document.createElement('ul');
    optionsList.classList.add('options');
    
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => selectOption(option, currentQuestion.answer));
        optionsList.appendChild(li);
    });
    
    quizContainer.appendChild(optionsList);
}

function selectOption(selectedOption, correctAnswer) {
    const options = document.querySelectorAll('.options li');
    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none'; // Disable further clicks
    });
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.style.display = 'none'; // Hide button until an answer is selected
    } else {
        quizContainer.innerHTML = "<h2>Quiz Completed!</h2>";
        nextButton.style.display = 'none';
    }
});

quizContainer.addEventListener('click', (e) => {
    if (e.target.matches('.options li')) {
        nextButton.style.display = 'block'; // Show button after an answer is selected
    }
});

loadQuestion();
