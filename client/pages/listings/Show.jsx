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
    <div className="container mx-auto p-4 md:p-8">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
      </div>

      {/* Image Section */}
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg mb-6">
        <img
          src={listing.image?.url}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mb-8">
        <p className="text-gray-600 mb-4">
          {listing.location}, {listing.country}
        </p>
        <p className="text-xl font-semibold">
          &#x20B9;{listing.price?.toLocaleString("en-IN")} / night
        </p>
      </div>

      <hr className="my-6" />

      {/* Description Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About this place</h2>
        <p className="text-gray-700">{listing.description}</p>
      </div>

      <hr className="my-6" />

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to={`/listings/${listing._id}/edit`}
          className="bg-gray-100 text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition-colors duration-200 text-center"
        >
          Edit this Listing
        </Link>
        <form onSubmit={handleDelete}>
          <button className="bg-red-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-600 transition-colors duration-200 w-full">
            Delete this Listing
          </button>
        </form>
      </div>
    </div>
  );
}
