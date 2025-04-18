import {Question, Category, QuizData} from '../types/quizTypes';

export const quizData: QuizData = {
    categories: [
        {
            id: 'js_basics',
            name: 'JavaScript Basics',
            questions: [
                {
                    id: 'q1',
                    question: "What is the correct syntax for referring to an external script called 'script.js'?",
                    options: [
                        "A. <script name='script.js'>",
                        "B. <script href='script.js'>",
                        "C. <script src='script.js'>",
                        "D. <script file='script.js'>"
                    ],
                    correctAnswer: "C",
                    timeLimit: 15
                },
                {
                    id: 'q2',
                    question: "Which company developed JavaScript?",
                    options: [
                        "A. Microsoft",
                        "B. Netscape",
                        "C. Google",
                        "D. Mozilla"
                    ],
                    correctAnswer: "B",
                    timeLimit: 15
                },
                {
                    id: 'q3',
                    question: "Inside which HTML element do we put the JavaScript?",
                    options: ["A. <js>", "B. <script>", "C. <javascript>", "D. <code>"],
                    correctAnswer: "B",
                    timeLimit: 15
                },
                {
                    id: 'q4',
                    question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id='demo'>Hello World!</p>",
                    options: [
                        "A. document.getElementById('demo').innerHTML = 'Hello';",
                        "B. #demo.innerHTML = 'Hello';",
                        "C. document.getElementByName('demo').innerHTML = 'Hello';",
                        "D. document.getElement('demo').innerHTML = 'Hello';"
                    ],
                    correctAnswer: "A",
                    timeLimit: 20
                },
                {
                    id: 'q5',
                    question: "Where is the correct place to insert a JavaScript?",
                    options: [
                        "A. The <body> section",
                        "B. Both the <head> section and the <body> section are correct",
                        "C. The <head> section",
                        "D. After the </body> tag"
                    ],
                    correctAnswer: "B",
                    timeLimit: 20
                },
                {
                    id: 'q6',
                    question: "What is the correct way to write a JavaScript array?",
                    options: [
                        "A. var colors = (1:'red', 2:'green', 3:'blue')",
                        "B. var colors = 'red', 'green', 'blue'",
                        "C. var colors = ['red', 'green', 'blue']",
                        "D. var colors = {1:'red', 2:'green', 3:'blue'}"
                    ],
                    correctAnswer: "C",
                    timeLimit: 20
                },
                {
                    id: 'q7',
                    question: "How do you round the number 7.25 to the nearest integer?",
                    options: ["A. round(7.25)", "B. Math.round(7.25)", "C. Math.rnd(7.25)", "D. rnd(7.25)"],
                    correctAnswer: "B",
                    timeLimit: 15
                },
                {
                    id: 'q8',
                    question: "How do you find the largest number of 12 and 20?",
                    options: ["A. Math.max(12,20)", "B. max(12,20)", "C. top(12,20)", "D. ceil(12,20)"],
                    correctAnswer: "A",
                    timeLimit: 15
                },
                {
                    id: 'q9',
                    question: "Which operator is used to assign a value to a variable?",
                    options: ["A. *", "B. =", "C. -", "D. x"],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'q10',
                    question: "What will the following code return: Boolean(10 > 9)?",
                    options: ["A. false", "B. NaN", "C. true", "D. undefined"],
                    correctAnswer: "C",
                    timeLimit: 10
                }
            ]
        },
        {
            id: 'react_hooks',
            name: 'React Hooks',
            questions: [
                {
                    id: 'q11',
                    question: "Which hook is used for performing side effects in functional components?",
                    options: ["A. useSideEffect()", "B. useEffect()", "C. useMount()", "D. useUpdate()"],
                    correctAnswer: "B",
                    timeLimit: 15
                },
                {
                    id: 'q12',
                    question: "Which hook is used to manage state in functional components?",
                    options: ["A. useState()", "B. useReducer()", "C. useVariable()", "D. useStore()"],
                    correctAnswer: "A",
                    timeLimit: 15
                },
                {
                    id: 'q13',
                    question: "Which hook is similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined?",
                    options: ["A. useLifecycle()", "B. useComponentEffect()", "C. useEffect()", "D. useMountEffect()"],
                    correctAnswer: "C",
                    timeLimit: 20
                },
                {
                    id: 'q14',
                    question: "What does useState return?",
                    options: [
                        "A. A state variable",
                        "B. A function to update the state",
                        "C. An object with state and setState",
                        "D. An array containing the state variable and a function to update it"
                    ],
                    correctAnswer: "D",
                    timeLimit: 20
                },
                {
                    id: 'q15',
                    question: "Which hook is used for managing global state?",
                    options: ["A. useGlobalState()", "B. useContext()", "C. useStore()", "D. useReducer()"],
                    correctAnswer: "B",
                    timeLimit: 20
                },
                {
                    id: 'q16',
                    question: "Which hook is used to optimize performance by memoizing expensive calculations?",
                    options: ["A. useMemo()", "B. useCallback()", "C. useOptimization()", "D. usePerformance()"],
                    correctAnswer: "A",
                    timeLimit: 20
                },
                {
                    id: 'q17',
                    question: "Which hook is used to memoize a function?",
                    options: ["A. useFunction()", "B. useMemo()", "C. useCallback()", "D. useHandler()"],
                    correctAnswer: "C",
                    timeLimit: 15
                },
                {
                    id: 'q18',
                    question: "Which hook is used to get a ref to a DOM element?",
                    options: ["A. useDOM()", "B. useRef()", "C. useElement()", "D. useNode()"],
                    correctAnswer: "B",
                    timeLimit: 15
                },
                {
                    id: 'q19',
                    question: "Which hook is used for managing state that has complex update logic?",
                    options: ["A. useState()", "B. useComplexState()", "C. useReducer()", "D. useObjectState()"],
                    correctAnswer: "C",
                    timeLimit: 15
                },
                {
                    id: 'q20',
                    question: "Can you call Hooks inside class components?",
                    options: ["A. Yes", "B. No", "C. Only in specific cases", "D. Only in render method"],
                    correctAnswer: "B",
                    timeLimit: 10
                }
            ]
        }
    ]
};