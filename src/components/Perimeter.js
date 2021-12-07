/** @format */

import { useState } from 'react';

const Perimeter = () => {
  const [side, setSide] = useState('');
  const [perimeter, setPerimeter] = useState('');

  const handleClick = () => {
    const length = Number(side);
    const perimeter = 4 * length;
    if (perimeter) setPerimeter(perimeter);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-around py-4">
        <div>
          <h1 className="text-xl font-mono">Enter length (in cm)</h1>
          <input
            required
            value={side}
            onChange={(e) => setSide(e.target.value)}
            type="number"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleClick}
          className="border border-purple-500 rounded py-2 px-5 cursor-pointer hover:bg-purple-500 hover:text-white"
        >
          Find perimeter
        </button>
      </div>
      <div className="text-center mt-6 text-2xl font-mono text-green-500">
        {perimeter ? `The perimeter of square is ${perimeter} cm.` : ''}
      </div>
    </div>
  );
};

export default Perimeter;
