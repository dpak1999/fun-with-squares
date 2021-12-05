/** @format */

const Navbar = () => {
  return (
    <div class="bg-gray-100 font-sans w-full min-h-screen m-0">
      <div class="bg-white shadow">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between py-4">
            <div className="text-purple-600 text-xl font-bold font-mono">
              Fun with squares
            </div>

            <div class="hidden sm:flex sm:items-center">
              <a
                href="/#"
                class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Is square?
              </a>
              <a
                href="/#"
                class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Quiz
              </a>
              <a
                href="/#"
                class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Area
              </a>
              <a
                href="/#"
                class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                Perimeter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
