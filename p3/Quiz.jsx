
import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "Which language is used in React?",
    options: ["Python", "JavaScript", "C", "SQL"],
    answer: "JavaScript"
  },
  {
    question: "Which hook manages state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState"
  },
  {
    question: "What is JSX?",
    options: [
      "Database",
      "CSS framework",
      "JavaScript XML",
      "Server"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which method renders lists?",
    options: ["filter()", "map()", "reduce()", "find()"],
    answer: "map()"
  },
  {
    question: "Which hook handles side effects?",
    options: ["useState", "useEffect", "useContext", "useId"],
    answer: "useEffect"
  }
];

function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState({});
  const [time, setTime] = useState(30);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    if (time <= 0) {
      setFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, finished]);

  function nextQuestion() {
    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  }

  const score = questions.filter(
    (q, i) => selected[i] === q.answer
  ).length;

  if (finished) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <h3>
          Your Score: {score} / {questions.length}
        </h3>
        {time <= 0 && <p>Time is up!</p>}
      </div>
    );
  }

  const q = questions[index];

  return (
    <div>
      <h1>Timed Quiz</h1>

      <h3>Time Remaining: {time} seconds</h3>

      <h3>
        Question {index + 1} of {questions.length}
      </h3>

      <p>{q.question}</p>

      {q.options.map((option) => (
        <label
          key={option}
          style={{ display: "block", margin: "10px" }}
        >
          <input
            type="radio"
            name={"question" + index}
            checked={selected[index] === option}
            onChange={() =>
              setSelected((prev) => ({
                ...prev,
                [index]: option
              }))
            }
          />
          {" "}{option}
        </label>
      ))}

      <button onClick={nextQuestion}>
        {index === questions.length - 1
          ? "Submit Quiz"
          : "Next Question"}
      </button>
    </div>
  );
}

export default Quiz;
