/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IsSquare from './components/IsSquare';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/square" element={<IsSquare />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
