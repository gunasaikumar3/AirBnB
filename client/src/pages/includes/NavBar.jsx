import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import Auth from "../auth/Auth.jsx";
import { logout } from "../../store/authSlice.js";
import { useSelector } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const { access, status } = useSelector((state) => state.auth);

  const isLoggedIn = !!access;

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false); // Close the menu after logging out
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openAuthModal = () => {
    console.log("Inside ", access);

    setIsSigninOpen(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between p-6 px-12">
          {/* ... (Your existing code for the left and right sections) ... */}
          <div className="flex items-center gap-6">
            <a
              className="text-2xl font-bold flex items-center gap-2 text-red-500"
              href="/listings"
            >
              <FontAwesomeIcon
                icon={faCompass}
                className="text-red-500 w-6 h-6"
              />
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
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="flex items-center gap-2 p-2 rounded-full border shadow-sm transition-all duration-200 ease-in-out hover:shadow-lg"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="w-4 h-4 text-gray-700"
              />
              <FontAwesomeIcon
                icon={faCircleUser}
                className="w-6 h-6 text-gray-500"
              />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 top-12 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  {/* Updated buttons to open modals */}
                  {isLoggedIn ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        // setIsLoggedIn(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Log out
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={openAuthModal}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
                      >
                        Sign up
                      </button>
                      <button
                        onClick={openAuthModal}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Log in
                      </button>
                    </>
                  )}
                  <hr className="my-1" />
                  <a
                    href="/listings/new"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Airbnb your home
                  </a>
                  <a
                    href="/help"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Help Center
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Conditionally render the correct modal based on state */}

      {isSigninOpen && <Auth onClose={closeModal} />}
      {isSignupOpen && <Auth onClose={closeModal} />}
    </>
  );
}
