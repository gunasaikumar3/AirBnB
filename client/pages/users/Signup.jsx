import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert("Please agree to the terms and conditions to continue.");
      return;
    }
    console.log("Signup Data:", formData);
    alert("Signup functionality is not implemented yet!");
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg mx-auto">
        <div className="p-6 border-b flex items-center">
          <button
            className="text-gray-500 hover:text-gray-800"
            // You can replace the console.log with a function to hide the component
            onClick={() => console.log("Close Modal")}
          >
            <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
          </button>
          <div className="flex-grow text-center">
            <h2 className="text-xl font-semibold">Sign up</h2>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-6">Welcome to AirBnB</h3>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 pt-6 border rounded-t-lg focus:border-black focus:outline-none transition-colors duration-200 peer relative z-10 bg-transparent"
                required
              />
              <label
                htmlFor="email"
                className="absolute top-4 left-4 text-gray-500 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-black peer-valid:text-xs peer-valid:top-2 peer-valid:text-black pointer-events-none"
              >
                Email
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 pt-6 border rounded-b-lg focus:border-black focus:outline-none transition-colors duration-200 peer relative z-10 bg-transparent"
                required
              />
              <label
                htmlFor="password"
                className="absolute top-4 left-4 text-gray-500 transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-black peer-valid:text-xs peer-valid:top-2 peer-valid:text-black pointer-events-none"
              >
                Password
              </label>
            </div>

            {/* Checkbox and Agreement Text */}
            <div className="flex items-start mt-6 mb-6">
              <input
                type="checkbox"
                id="agreedToTerms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="w-5 h-5 mt-1 mr-3 rounded-sm text-red-500 focus:ring-red-500"
              />
              <label htmlFor="agreedToTerms" className="text-sm text-gray-500">
                By selecting **Agree and continue**, I agree to AirBnB's{" "}
                <a href="#" className="font-semibold text-black underline">
                  Terms of Service
                </a>
                ,{" "}
                <a href="#" className="font-semibold text-black underline">
                  Payments Terms of Service
                </a>
                , and{" "}
                <a href="#" className="font-semibold text-black underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full p-4 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-colors duration-200"
            >
              Agree and continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
