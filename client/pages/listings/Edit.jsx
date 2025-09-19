import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const BACKEND_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    location: "",
    country: "",
  });

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/listings/${id}`);
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListings();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${BACKEND_URL}/listings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ listing: formData }),
    });

    if (res.ok) {
      navigate(`/listings/${id}`);
    }
  };

  return (
    <div>
      <h3>Edit your Listing</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="enter title"
          value={formData.title}
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="enter description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <input
          name="image"
          placeholder="enter image URL/Link"
          value={formData.image.url}
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="price"
          placeholder="enter price"
          value={formData.price}
          type="number"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="location"
          placeholder="enter location"
          value={formData.location}
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="country"
          placeholder="enter country"
          value={formData.country}
          type="text"
          onChange={handleChange}
        />

        <button>Edit</button>
      </form>
    </div>
  );
}
