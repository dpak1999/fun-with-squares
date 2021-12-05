/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IsSquare from './components/IsSquare';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/square" element={<IsSquare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
