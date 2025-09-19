import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Show() {
  const { id } = useParams();

  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_API_URL;
  const [listing, setListing] = useState({});

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/listings/${id}`);
        const data = await res.json();
        setListing(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListing();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await fetch(`${BACKEND_URL}/listings/${id}`, {
      method: "DELETE",
    });

    console.log(res);

    if (res.ok) {
      navigate("/listings");
    }
  };

  return (
    <div>
      <h3>Listing Details :</h3>
      <ul>
        <li>{listing.title}</li>
        <li>{listing.description}</li>
        <li>&#x20B9;{listing.price?.toLocaleString("en-IN")}</li>
        <li>{listing.location}</li>
        <li>{listing.country}</li>
      </ul>
      <br />
      <Link to={`/listings/${listing._id}/edit`}>Edit this Listing</Link>
      <br />
      <br />
      <form onSubmit={handleDelete}>
        <button>Delete this Listing</button>
      </form>
    </div>
  );
}
