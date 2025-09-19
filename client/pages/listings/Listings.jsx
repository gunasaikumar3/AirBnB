import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Listings() {
  const BACKEND_URL = import.meta.env.VITE_API_URL;

  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/listings`);
        const data = await res.json();
        setListings(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h3 className="text-2xl font-bold mb-8">All Listings</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <Link
            to={`/listings/${listing._id}`}
            key={listing._id}
            className="block"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-48 object-cover rounded-t-xl"
                src={listing.image.url}
                alt={listing.title}
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{listing.title}</h4>
                <p className="text-gray-600 text-sm mt-1">
                  ₹{listing.price} / night
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
