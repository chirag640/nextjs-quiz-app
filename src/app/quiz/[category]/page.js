// src/app/quiz/[category]/page.js

"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import QuizCard from "../../../components/QuizCard";
import Timer from "../../../components/Timer";
import ScoreModal from "../../../components/ScoreModal";
import Header from "@/components/Header";

const Quiz = ({ params }) => {
  const searchParams = useSearchParams();
  const { category } = params;
  const difficulty = searchParams.get("difficulty");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      const url = `https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=${difficulty}&limit=10`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if (result && result.length) {
          setQuestions(result);
        } else {
          setError("Failed to fetch questions.");
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError("Error fetching questions.");
      } finally {
        setLoading(false);
      }
    };

    if (category && difficulty) {
      fetchQuestions();
    }
  }, [category, difficulty]);

  const handleOptionSelect = (option, index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
      setIsRunning(false);
      const isCorrect = correctAnswer === option;
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsRunning(true);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScoreModal(true);
    }
  };

  const exitQuiz = () => {
    setIsRunning(false);
    setShowScoreModal(true);
  };

  const handleTimeUp = () => {
    nextQuestion();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Error: {error}
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = [
    ...currentQuestion.incorrectAnswers,
    currentQuestion.correctAnswer,
  ];
  const correctAnswer = currentQuestion.correctAnswer;

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-3xl px-4">
          <Timer
            key={currentQuestionIndex}
            duration={10}
            onTimeUp={handleTimeUp}
            isRunning={isRunning}
          />
          <QuizCard
            question={currentQuestion.question.text}
            options={options}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
            correctAnswer={correctAnswer}
            currentQuestionIndex={currentQuestionIndex}
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={exitQuiz}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Exit Quiz
            </button>
            <button
              onClick={nextQuestion}
              className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 ${
                selectedOption === null ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={selectedOption === null}
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
      {showScoreModal && <ScoreModal score={score} total={questions.length} />}
    </>
  );
};

export default Quiz;
