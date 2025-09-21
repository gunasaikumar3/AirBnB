import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const DUMMY_REVIEWS = [
  {
    author: "Chetan",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    joined: "10 years on Airbnb",
    date: "August 2025",
    content:
      "Our stay at Aaron's apartment was absolutely wonderful! The apartment is modern, spacious, and beautifully decorated, with lovely balconies and a stunning lake view. The location is perfect, close to all the main attractions yet quiet and peaceful. We highly recommend this place for a memorable holiday.",
  },
  {
    author: "Shivani",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    joined: "5 years on Airbnb",
    date: "August 2025",
    content:
      "We enjoyed our stay at this place. The house was clean and maintained well. No issues with the appliances or the ac. Benaulim beach is just a 300 m walk from the property. Very well maintained pool.",
  },
  {
    author: "Jacomien",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    joined: "6 years on Airbnb",
    date: "July 2025",
    content:
      "We truly enjoyed staying at this place: amazing and peaceful view over the lake right beside with lots of different species of birds to be seen, a nice, clean swimming pool, short walk away from the beach, and very good food and friendly service at the restaurant.",
  },
  {
    author: "Jessica",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    joined: "New York, New York",
    date: "July 2025",
    content:
      "It was a pleasure staying at Aaron's place. The apartment was neat and clean, and conveniently located close to the Madgaon Railway Station. The hosts were very responsive and helpful, making for a smooth check-in and stay. The space itself is well-furnished and comfortable.",
  },
  {
    author: "Raj",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    joined: "3 years on Airbnb",
    date: "July 2025",
    content:
      "Firstly thanks to the co-host Nathalie coz we arrived at the location 4hrs prior to our checkin time and yet she arranged our room 2hrs earlier. Property is same as described in posts. Very kind co-host.",
  },
  {
    author: "Yuthish",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    joined: "5 years on Airbnb",
    date: "June 2025",
    content:
      "Nathalie was proactive and responsive. The property is a classy, neat apartment in a gated society, 8-minute walk from the Benaulim beach, and about 200 meters from a well-stocked supermarket. The apartment is very clean and well-maintained.",
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  // In a real app, you would fetch data here based on `id`
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const res = await fetch(`YOUR_BACKEND_URL/listings/${id}/reviews`);
  //     const data = await res.json();
  //     setReviews(data);
  //   };
  //   fetchReviews();
  // }, [id]);

  // For this example, we use the dummy data
  useEffect(() => {
    setReviews(DUMMY_REVIEWS);
  }, []);

  return (
    <div className="mt-8 border-t pt-8">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-semibold">
          <i className="fa-solid fa-star"></i> 4.86 · 205 reviews
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{review.author}</h3>
                <p className="text-gray-500 text-sm">{review.joined}</p>
              </div>
            </div>
            <p className="text-gray-700">
              {review.content.length > 150
                ? `${review.content.substring(0, 150)}...`
                : review.content}
            </p>
            <button className="text-sm font-semibold text-gray-800 underline mt-2">
              Show more
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="border border-gray-400 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200">
          Show all {reviews.length} reviews
        </button>
      </div>
    </div>
  );
}
