import { useState } from 'react';

interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: string;
}

const Quiz = () => {
  const quizData: QuizItem = {
    question: 'When was Bulgaria founded?',
    options: ['861', '681', '964', '1018'],
    correctAnswer: '681'
  };

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Function to handle user's answer selection
  const handleAnswerClick = (answer: string) => {
    const correct = answer === quizData.correctAnswer;
    setSelectedAnswer(answer);
    setIsCorrect(correct);
  };

  return (
    <div>
      <h2>{quizData.question}</h2>

      <ul>
        {quizData.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(option)}
            style={{ cursor: 'pointer', fontWeight: selectedAnswer === option ? 'bold' : 'normal' }}
          >
            {option}
          </li>
        ))}
      </ul>

      {selectedAnswer && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
      )}
    </div>
  );
};

export default Quiz;
