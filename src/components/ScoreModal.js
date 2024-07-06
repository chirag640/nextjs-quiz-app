// src/components/ScoreModal.js
import Link from 'next/link';

const ScoreModal = ({ score, totalQuestions }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-lg mb-6">Your Score: {score} / {totalQuestions}</p>
        <Link href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Play Again
        </Link>
      </div>
    </div>
  );
};

export default ScoreModal;
