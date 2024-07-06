import React from 'react';

const QuizCard = ({ question, options, selectedOption, handleOptionSelect, correctAnswer, currentQuestionIndex }) => {
  const getButtonClass = (index) => {
    if (selectedOption === null) {
      return 'bg-gray-200 hover:bg-gray-300';
    }

    if (selectedOption === index) {
      return options[selectedOption] === correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
    }

    if (options[index] === correctAnswer) {
      return 'bg-green-500 text-white';
    }

    return 'bg-gray-200';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-bold mb-4">Question: {currentQuestionIndex + 1}</h2>
      <p className="mb-4">{question}</p>
      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option, index)}
            className={`py-2 px-4 rounded ${getButtonClass(index)}`}
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
