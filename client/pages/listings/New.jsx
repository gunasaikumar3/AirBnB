import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function New() {
  const BACKEND_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    location: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${BACKEND_URL}/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ listing: formData }),
    });

    console.log(res);

    if (res.ok) {
      navigate("/listings");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 font-sans">
      <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-lg">
        <h3 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Create a New Listing
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="title"
            placeholder="Enter title"
            type="text"
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          />
          <textarea
            name="description"
            placeholder="Enter description"
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 min-h-[120px]"
          ></textarea>
          <input
            name="image"
            placeholder="Enter image URL/Link"
            type="text"
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          />
          <input
            name="price"
            placeholder="Enter price"
            type="number"
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          />
          <input
            name="location"
            placeholder="Enter location"
            type="text"
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          />
          <input
            name="country"
            placeholder="Enter country"
            type="text"
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
          />
          <button
            type="submit"
            className="w-full py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
