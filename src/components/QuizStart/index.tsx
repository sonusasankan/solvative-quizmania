import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import logo from '../../assets/logo.png';

import QuizRulesModal from '../QuizRulesModal';


interface QuizStartProps {
    onStart: (name: string, topic: string) => void;
}

export const QuizStart: React.FC<QuizStartProps> = ({ onStart }) => {
    const [name, setName] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);


    const handleStart = () => {
        if (name.trim() && selectedTopic) {
            onStart(name, selectedTopic);
        }
    };

    const topics = [
        { id: 'javascript-basic', label: 'Javascript Basic' },
        { id: 'angular-basic', label: 'Angular Basic' },
        { id: 'react-advance', label: 'React.js Advance' },
        { id: 'flutter', label: 'Flutter' },
    ];

    return (
        <div className="w-500 rounded-lg p-6 flex flex-col items-center m-auto start-form">
            <h2 className="text-5xl font-bold text-center mb-4 text-gray-800 font-outfit flex items-baseline-last">
            Welcome  <img className='ml-2' src={logo} alt="App logo"/>
            </h2>
            <p className="text-center text-gray-700 mb-6 font-outfit">
                Please read all the rules about this quiz before you start. <button className='text-blue-400 cursor-pointer' onClick={() => setIsRulesModalOpen(true)}>Quiz Rules</button>

            </p>

            <div className="w-full mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 font-outfit">Full Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-outfit"
                />
            </div>

            <div className="w-full mb-6">
                <p className="block text-gray-700 text-sm font-bold mb-2 font-outfit">Please select topic to continue</p>
                <div className="grid grid-cols-2 gap-2">
                    {topics.map((topic) => (
                        <label
                            key={topic.id}
                            className={cn(
                                "inline-flex items-center rounded-full px-4 py-2 cursor-pointer",
                                "border-2",
                                selectedTopic === topic.id
                                    ? "bg-pink-100 border-pink-500 text-pink-700"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-100",
                                "font-outfit text-sm"
                            )}
                        >
                            <input
                                type="radio"
                                name="topic"
                                value={topic.id}
                                checked={selectedTopic === topic.id}
                                onChange={() => setSelectedTopic(topic.id)}
                                className="mr-2 h-4 w-4"
                            />
                            {topic.label}
                        </label>
                    ))}
                </div>
            </div>

            <button
                onClick={handleStart}
                disabled={!name.trim() || !selectedTopic}
                className={cn(
                    "bg-pink-500 hover:bg-pink-700 mr-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-outfit",
                    (!name.trim() || !selectedTopic) && "opacity-50 cursor-not-allowed"
                )}
            >
                Start Quiz
            </button>
            <QuizRulesModal isOpen={isRulesModalOpen} onClose={() => setIsRulesModalOpen(false)} />
        </div>
    );
};

export default QuizStart;
