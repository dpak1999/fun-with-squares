/** @format */

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-purple-600 text-xl font-bold font-mono">
            Fun with squares
          </div>

          <div class="hidden sm:flex sm:items-center">
            <Link
              to="/square"
              className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
            >
              Is square?
            </Link>
            <Link
              to="/quiz"
              className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
            >
              Quiz
            </Link>
            <Link
              to="/"
              className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
            >
              Area
            </Link>
            <Link
              to="/"
              className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
            >
              Perimeter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
