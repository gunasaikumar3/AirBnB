import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between p-6 px-12">
        {/* Left Section - Logo and Links */}
        <div className="flex items-center gap-6">
          <a
            className="text-2xl font-bold flex items-center gap-2 text-red-500"
            href="/listings"
          >
            <FontAwesomeIcon
              icon={faCompass}
              className="text-red-500 w-6 h-6"
            />
            {/* <span className="hidden sm:inline">WanderLust</span> */}
          </a>
          <div className="hidden lg:flex items-center gap-4">
            <a className="text-red-500 font-semibold" href="/listings">
              Home
            </a>
            <a
              className="text-gray-700 font-semibold hover:underline"
              href="/listings"
            >
              All Listings
            </a>
            <a
              className="text-gray-700 font-semibold hover:underline"
              href="/listings/new"
            >
              Add new Listing
            </a>
          </div>
        </div>

        {/* Right Section - User Menu
        <div className="flex items-center gap-4">
          <a
            className="hidden lg:block text-sm font-semibold text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            href="/airbnb-your-home"
          >
            Airbnb your Home
          </a>
          <button className="flex items-center gap-2 p-1 border rounded-full hover:shadow-md transition-all duration-200">
            <img
              src="https://via.placeholder.com/30"
              alt="User"
              className="w-6 h-6 rounded-full"
            />
          </button>
        </div> */}
      </div>
    </nav>
  );
}
