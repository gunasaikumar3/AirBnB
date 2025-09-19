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
    <div>
      <h3>Create a New Listing</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="enter title"
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="enter description"
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <input
          name="image"
          placeholder="enter image URL/Link"
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="price"
          placeholder="enter price"
          type="number"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="location"
          placeholder="enter location"
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="country"
          placeholder="enter country"
          type="text"
          onChange={handleChange}
        />

        <button>Add</button>
      </form>
    </div>
  );
}
