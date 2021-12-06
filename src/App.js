/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Area from './components/Area';
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
          <Route path="/area" element={<Area />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
