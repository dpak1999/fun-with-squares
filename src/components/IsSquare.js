/** @format */

import { useState } from 'react';

const IsSquare = () => {
  const [message, setMessage] = useState('');
  const [flag, setFlag] = useState(false);
  const [side, setSide] = useState({
    firstSide: '20',
    secondSide: '30',
    thirdSide: '40',
    fourthSide: '50',
  });

  const [angle, setAngle] = useState({
    firstAngle: '90',
    secondAngle: '90',
    thirdAngle: '90',
    fourthAngle: '90',
  });

  const handleSideChange = (e) => {
    const value = e.target.value;
    setSide({
      ...side,
      [e.target.name]: value,
    });
  };

  const handleAngleChange = (e) => {
    const value = e.target.value;
    setAngle({
      ...angle,
      [e.target.name]: value,
    });
  };

  const handleClick = () => {
    const sides = Object.values(side);
    const angles = Object.values(angle);

    const allSides = sides.every((value) => value === sides[0]);
    const allAngles = angles.every((value) => value === angles[0]);

    if (allSides && allAngles && angle.firstAngle === '90') {
      setMessage('Yayy it is a square');
      setFlag(true);
    } else {
      setMessage('Uh! Oh it is not a square');
      setFlag(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-around py-4">
        <div>
          <h1 className="text-xl font-mono">Enter first side</h1>
          <input
            required
            value={side.firstSide}
            name="firstSide"
            onChange={handleSideChange}
            type="number"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter second side</h1>
          <input
            required
            value={side.secondSide}
            name="secondSide"
            onChange={handleSideChange}
            type="number"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter third side</h1>
          <input
            required
            value={side.thirdSide}
            name="thirdSide"
            onChange={handleSideChange}
            type="number"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter fourth side</h1>
          <input
            required
            value={side.fourthSide}
            name="fourthSide"
            onChange={handleSideChange}
            type="number"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />
        </div>

        <div>
          <h1 className="text-xl font-mono">Enter first angle</h1>
          <input
            value={angle.firstAngle}
            name="firstAngle"
            onChange={handleAngleChange}
            type="number"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter second angle</h1>
          <input
            value={angle.secondAngle}
            name="secondAngle"
            onChange={handleAngleChange}
            type="number"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter third angle</h1>
          <input
            value={angle.thirdAngle}
            name="thirdAngle"
            onChange={handleAngleChange}
            type="number"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter fourth angle</h1>
          <input
            value={angle.fourthAngle}
            name="fourthAngle"
            onChange={handleAngleChange}
            type="number"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />
        </div>
      </div>

      <div
        className={`text-center mb-6 text-2xl font-mono ${
          flag ? `text-green-500` : `text-red-500`
        }`}
      >
        {message && message}
      </div>

      <div className="text-center">
        <button
          onClick={handleClick}
          className="border border-purple-500 rounded py-2 px-5 cursor-pointer hover:bg-purple-500 hover:text-white"
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default IsSquare;
