/** @format */

import { useState } from 'react';

const IsSquare = () => {
  const [side, setSide] = useState({
    firstSide: '',
    secondSide: '',
    thirdSide: '',
    fourthSide: '',
  });

  const [angle, setAngle] = useState({
    firstAngle: '',
    secondAngle: '',
    thirdAngle: '',
    fourthAngle: '',
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

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-around py-4">
        <div>
          <h1 className="text-xl font-mono">Enter first side</h1>
          <input
            value={side.firstSide}
            name="firstSide"
            onChange={handleSideChange}
            type="text"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter second side</h1>
          <input
            value={side.secondSide}
            name="secondSide"
            onChange={handleSideChange}
            type="text"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter third side</h1>
          <input
            value={side.thirdSide}
            name="thirdSide"
            onChange={handleSideChange}
            type="text"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter fourth side</h1>
          <input
            value={side.fourthSide}
            name="fourthSide"
            onChange={handleSideChange}
            type="text"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />
        </div>

        <div>
          <h1 className="text-xl font-mono">Enter first angle</h1>
          <input
            value={angle.firstAngle}
            name="firstAngle"
            onChange={handleAngleChange}
            type="text"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter second angle</h1>
          <input
            value={angle.secondAngle}
            name="secondAngle"
            onChange={handleAngleChange}
            type="text"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter third angle</h1>
          <input
            value={angle.thirdAngle}
            name="thirdAngle"
            onChange={handleAngleChange}
            type="text"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />

          <h1 className="text-xl font-mono">Enter fourth angle</h1>
          <input
            value={angle.fourthAngle}
            name="fourthAngle"
            onChange={handleAngleChange}
            type="text"
            className="border border-purple-400 w-80 p-2 rounded outline-none mb-5"
          />
        </div>
      </div>
    </div>
  );
};

export default IsSquare;
