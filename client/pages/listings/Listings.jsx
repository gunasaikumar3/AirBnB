import { useEffect } from "react";
import { useState } from "react";
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
      } catch (err) {
        console.error(err);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h3>All Listings</h3>

      <form method="GET" action="/listings/new">
        <button>Create new Listings</button>
      </form>

      <ul>
        {listings.map((listing) => {
          return (
            <li>
              <Link to={`/listings/${listing._id}`}>{listing.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
