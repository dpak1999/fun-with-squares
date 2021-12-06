/** @format */

import { useState } from 'react';

const Quiz = () => {
  const answers = ['4', '90', 'true'];
  const [score, setScore] = useState(0);
  const [state, setState] = useState({
    q1: '',
    q2: '',
    q3: '',
  });

  const handleChange = (e) => {
    const v = e.target.value;

    setState({
      ...state,
      [e.target.name]: v,
    });
  };

  const handleClick = () => {
    let score = 0;
    let index = 0;
    const userAnswer = Object.values(state);

    answers.forEach(() => {
      if (userAnswer[index] === answers[index]) {
        score++;
      }
      index++;
    });
    setScore(score);
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-4 underline">
        Check your knowledge of squares
      </h1>

      <div className="mt-4">
        <h2 className="text-2xl text-center">
          1. How many sides does a square have?
        </h2>

        <div className="flex text-center flex-row justify-center">
          <label className="mr-5">
            <input type="radio" name="q1" value="3" onChange={handleChange} />
            <span className="ml-3">3</span>
          </label>
          <label className="mr-5">
            <input type="radio" name="q1" value="4" onChange={handleChange} />
            <span className="ml-3">4</span>
          </label>
          <label className="mr-5">
            <input type="radio" name="q1" value="5" onChange={handleChange} />
            <span className="ml-3">5</span>
          </label>
          <label className="mr-5">
            <input type="radio" name="q1" value="6" onChange={handleChange} />
            <span className="ml-3">6</span>
          </label>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl text-center">
          3. What is the value of each angle of a square?
        </h2>

        <div className="flex text-center flex-row justify-center">
          <label className="mr-5">
            <input type="radio" name="q2" value="60" onChange={handleChange} />
            <span className="ml-3">60</span>
          </label>
          <label className="mr-5">
            <input type="radio" name="q2" value="70" onChange={handleChange} />
            <span className="ml-3">70</span>
          </label>
          <label className="mr-5">
            <input type="radio" name="q2" value="80" onChange={handleChange} />
            <span className="ml-3">80</span>
          </label>
          <label className="mr-5">
            <input type="radio" name="q2" value="90" onChange={handleChange} />
            <span className="ml-3">90</span>
          </label>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl text-center">
          3. Each angle in a square is 90 degree?
        </h2>

        <div className="flex text-center flex-row justify-center">
          <label className="mr-5">
            <input
              type="radio"
              name="q3"
              value="true"
              onChange={handleChange}
            />
            <span className="ml-3">True</span>
          </label>
          <label className="mr-5">
            <input
              type="radio"
              name="q3"
              value="false"
              onChange={handleChange}
            />
            <span className="ml-3">False</span>
          </label>
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={handleClick}
          className="border border-purple-500 rounded py-2 px-5 cursor-pointer hover:bg-purple-500 hover:text-white"
        >
          Check
        </button>
      </div>

      <div className="text-center mt-9 text-2xl text-purple-500">
        Your score is {score && score}
      </div>
    </div>
  );
};

export default Quiz;
