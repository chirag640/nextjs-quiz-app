// src/components/QuizCard.js

import React from 'react';

const QuizCard = ({
  question,
  options,
  selectedOption,
  handleOptionSelect,
  correctAnswer,
  currentQuestionIndex,
}) => {
  return (
    <div className="w-full bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          Question {currentQuestionIndex + 1}
        </h2>
        <p className="text-lg">{question}</p>
      </div>
      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option, index)}
            className={`w-full py-2 px-4 text-left rounded-md transition-colors duration-300 
              ${
                selectedOption !== null
                  ? option === correctAnswer
                    ? 'bg-green-500 text-white'
                    : index === selectedOption
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200'
                  : 'bg-gray-200 hover:bg-yellow-300'
              }`}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
