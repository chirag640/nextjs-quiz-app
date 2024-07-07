"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import Link from "next/link";
import rightImage from "../../public/sidePhoto.png";
import Image from "next/image";
import Header from "@/components/Header";

const Home = () => {
  const [category, setCategory] = useState("general");
  const [difficulty, setDifficulty] = useState("easy");
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      {/* Header Section */}
      <Header/>

      {/* Main Content Section */}
      <main className="w-full flex-1 flex items-center justify-center py-8 px-20">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4">
          <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz App</h1>
          <p className="text-lg mb-6">
            Test your knowledge across various subjects with our interactive quizzes. Choose a category and difficulty level to get started!
          </p>
          {user ? (
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="category" className="block text-lg font-medium">
                  Select Category:
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="general">General Knowledge</option>
                  <option value="science">Science</option>
                  <option value="history">History</option>
                  <option value="food_and_drink">food and drink</option>
                  <option value="film_and_tv">film and tv</option>
                  <option value="geography">Geography</option>
                  <option value="sport_and_leisure">sport and leisure</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="difficulty"
                  className="block text-lg font-medium"
                >
                  Select Difficulty:
                </label>
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
              <Link
                href={`/quiz/${category}?difficulty=${difficulty}`}
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400 block w-full text-center"
              >
                Start Quiz
              </Link>
            </div>
          ):(
            <Link
                href='/api/auth/login'
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400 block w-1/2 text-center"
              >
                Start Quiz
              </Link>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-2/3 px-4 py-8">
          <Image
            src={rightImage}
            alt="Quiz App Image"
            className="mx-auto max-w-full md:max-w-lg lg:max-w-xl"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
