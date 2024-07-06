// src/app/page.js
"use client";
import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [category, setCategory] = useState('general');
  const [difficulty, setDifficulty] = useState('easy');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz App</h1>
      <div className="mb-4">
        <label htmlFor="category" className="block text-lg font-medium">Select Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="general">General Knowledge</option>
          <option value="science">Science</option>
          <option value="history">History</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="difficulty" className="block text-lg font-medium">Select Difficulty:</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <Link href={`/quiz/${category}?difficulty=${difficulty}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Start Quiz

      </Link>
    </div>
  );
};

export default Home;
