/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Area from './components/Area';
import IsSquare from './components/IsSquare';
import Navbar from './components/Navbar';
import Perimeter from './components/Perimeter';
import Quiz from './components/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<IsSquare />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/area" element={<Area />} />
        <Route path="/perimeter" element={<Perimeter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
