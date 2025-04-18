import {QuizData} from '../types/quizTypes';

export const quizData: QuizData = {
    categories: [
        {
            id: 'javascript-basic',
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
                    timeLimit: 10
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
                    timeLimit: 10
                },
                {
                    id: 'q3',
                    question: "Inside which HTML element do we put the JavaScript?",
                    options: ["A. <js>", "B. <script>", "C. <javascript>", "D. <code>"],
                    correctAnswer: "B",
                    timeLimit: 10
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
                    timeLimit: 10
                },
                {
                    id: 'q8',
                    question: "How do you find the largest number of 12 and 20?",
                    options: ["A. Math.max(12,20)", "B. max(12,20)", "C. top(12,20)", "D. ceil(12,20)"],
                    correctAnswer: "A",
                    timeLimit: 10
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
            id: 'react-advance',
            name: 'React Hooks',
            questions: [
                {
                    id: 'q11',
                    question: "Which hook is used for performing side effects in functional components?",
                    options: ["A. useSideEffect()", "B. useEffect()", "C. useMount()", "D. useUpdate()"],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'q12',
                    question: "Which hook is used to manage state in functional components?",
                    options: ["A. useState()", "B. useReducer()", "C. useVariable()", "D. useStore()"],
                    correctAnswer: "A",
                    timeLimit: 10
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
                    id: 'q10',
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
                    timeLimit: 10
                },
                {
                    id: 'q18',
                    question: "Which hook is used to get a ref to a DOM element?",
                    options: ["A. useDOM()", "B. useRef()", "C. useElement()", "D. useNode()"],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'q19',
                    question: "Which hook is used for managing state that has complex update logic?",
                    options: ["A. useState()", "B. useComplexState()", "C. useReducer()", "D. useObjectState()"],
                    correctAnswer: "C",
                    timeLimit: 10
                },
                {
                    id: 'q20',
                    question: "Can you call Hooks inside class components?",
                    options: ["A. Yes", "B. No", "C. Only in specific cases", "D. Only in render method"],
                    correctAnswer: "B",
                    timeLimit: 10
                }
            ]
        },
        {
            id: 'angular-basic',
            name: 'Angular Basics',
            questions: [
                {
                    id: 'a1',
                    question: "What is Angular?",
                    options: ["A. A programming language", "B. A JavaScript framework", "C. A database", "D. An operating system"],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'a2',
                    question: "What is the command to create a new Angular project?",
                    options: ["A. ng new", "B. angular create", "C. new angular", "D. create-angular-app"],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: 'a3',
                    question: "What is a component in Angular?",
                    options: [
                        "A. A reusable UI element",
                        "B. A function",
                        "C. A class",
                        "D. A module"
                    ],
                    correctAnswer: "A",
                    timeLimit: 20
                },
                {
                    id: 'a4',
                    question: "Which decorator is used to define a component?",
                    options: ["A. @Component", "B. @Directive", "C. @NgModule", "D. @Injectable"],
                    correctAnswer: "A",
                    timeLimit: 20
                },
                {
                    id: 'a5',
                    question: "What is the purpose of Angular modules (NgModule)?",
                    options: [
                        "A. To define styles",
                        "B. To group related components, directives, and services",
                        "C. To handle routing",
                        "D. To manage state"
                    ],
                    correctAnswer: "B",
                    timeLimit: 20
                },
                {
                    id: 'a6',
                    question: "What is data binding in Angular?",
                    options: [
                        "A. Connecting HTML templates to component data",
                        "B. Securing data",
                        "C. Validating data",
                        "D. Transforming data"
                    ],
                    correctAnswer: "A",
                    timeLimit: 20
                },
                {
                    id: 'a7',
                    question: "What are Angular templates?",
                    options: [
                        "A. CSS files",
                        "B. HTML files with Angular syntax",
                        "C. JavaScript files",
                        "D. Image files"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'a8',
                    question: "What is Angular CLI?",
                    options: [
                        "A. A compiler",
                        "B. A command-line tool for Angular development",
                        "C. A testing framework",
                        "D. A code editor"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'a9',
                    question: "Which symbol is used for property binding in Angular?",
                    options: ["A. ()", "B. []", "C. {}", "D. {{}}"],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'a10',
                    question: "What is the purpose of *ngFor directive?",
                    options: [
                        "A. To define a component",
                        "B. To create a loop in the template",
                        "C. To handle events",
                        "D. To apply styles"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                }
            ]
        },
        {
            id: 'flutter',
            name: 'Flutter Basics',
            questions: [
                {
                    id: 'f1',
                    question: "What is Flutter?",
                    options: [
                        "A. A programming language",
                        "B. A UI toolkit for building cross-platform apps",
                        "C. A database",
                        "D. An operating system"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'f2',
                    question: "Which language is primarily used to write Flutter code?",
                    options: ["A. Java", "B. Swift", "C. Dart", "D. Kotlin"],
                    correctAnswer: "C",
                    timeLimit: 10
                },
                {
                    id: 'f3',
                    question: "What is a 'Widget' in Flutter?",
                    options: [
                        "A. A reusable UI component",
                        "B. A function",
                        "C. A class",
                        "D. A module"
                    ],
                    correctAnswer: "A",
                    timeLimit: 20
                },
                {
                    id: 'f4',
                    question: "Which function is the entry point for a Flutter application?",
                    options: ["A. main()", "B. run()", "C. startApp()", "D. runApp()"],
                    correctAnswer: "D",
                    timeLimit: 20
                },
                {
                    id: 'f5',
                    question: "What is the purpose of the 'build' method in a Flutter widget?",
                    options: [
                        "A. To define styles",
                        "B. To create the UI representation of the widget",
                        "C. To handle user input",
                        "D. To manage state"
                    ],
                    correctAnswer: "B",
                    timeLimit: 20
                },
                {
                    id: 'f6',
                    question: "What is 'State' in Flutter?",
                    options: [
                        "A. The visual appearance of a widget",
                        "B. Data that can change during the lifetime of a widget",
                        "C. The structure of the app",
                        "D. User input"
                    ],
                    correctAnswer: "B",
                    timeLimit: 20
                },
                {
                    id: 'f7',
                    question: "What are the two main types of widgets in Flutter?",
                    options: [
                        "A. Stateful and Stateless",
                        "B. Functional and Class",
                        "C. UI and Logic",
                        "D. Parent and Child"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: 'f8',
                    question: "What is 'Hot Reload' in Flutter?",
                    options: [
                        "A. Restarting the app",
                        "B. Updating the UI without losing the app's state",
                        "C. Compiling the app",
                        "D. Deploying the app"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'f9',
                    question: "Which layout widget is used to display children in a horizontal row?",
                    options: ["A. Column", "B. Row", "C. Stack", "D. Container"],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: 'f10',
                    question: "What is pubspec.yaml?",
                    options: [
                        "A. A file containing UI definitions",
                        "B. A file that manages project dependencies and metadata",
                        "C. A file for storing app data",
                        "D. A file for defining routes"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                }
            ]
        }
    ]
};