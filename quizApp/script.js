const quizData = [
    {
        question: "Which is the largest continent?",
        a: "Asia",
        b: "Antartica",
        c: "Africa",
        d: "Russia",
        correct: "d",
    },
    {
        question: "Which is the longest River in the world?",
        a: "Ganga",
        b: "Nile",
        c: "Congo",
        d: "Amur",
        correct: "b",
    },
    {
        question: "Which is the smallest country in the world?",
        a: "Vatican City",
        b: "Monacco",
        c: "Maldives",
        d: "Nepal",
        correct: "a",
    },
    {
        question: "What country has the highest life expectancy? ",
        a: "India",
        b: "Nepal",
        c: "Japan",
        d: "Hong Kong",
        correct: "d",
    },
    {
        question: "Which scientist discovered the radioactive element radium?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Benjamin Franklin",
        d: "Marie Curie",
        correct: "d",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})