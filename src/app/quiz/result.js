// pages/quiz/result.js
import Link from 'next/link';

const Result = ({ score }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Quiz Completed!</h1>
      <p className="text-2xl mb-6">Your Score: {score}</p>
      <Link href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Play Again
      </Link>
    </div>
  );
};

export default Result;
