import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Placeholder component for the review form
function ReviewForm({ onCancel, onSubmit }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ comment, rating });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl mt-8 border">
      <h3 className="text-xl font-semibold mb-4">Write your review</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-medium mb-1"
          >
            Rating:
          </label>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                onClick={() => setRating(i + 1)}
                className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.542 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.787.57-1.842-.197-1.542-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-gray-700 font-medium mb-1"
          >
            Comment:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(6);
  const { id } = useParams();

  // A mock backend fetch function
  const fetchReviews = async () => {
    setIsLoading(true);
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockData = [
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
      {
        author: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        joined: "1 year on Airbnb",
        date: "May 2025",
        content: "Great stay, highly recommended!",
      },
      {
        author: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        joined: "2 years on Airbnb",
        date: "May 2025",
        content: "Clean and comfortable, would stay again.",
      },
    ];
    setReviews(mockData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, [id]);

  const handleCreateReview = () => {
    setShowReviewForm(true);
  };

  const handleShowAllReviews = () => {
    setVisibleReviewsCount(reviews.length);
  };

  const handleNewReviewSubmit = (newReview) => {
    const newReviewWithDetails = {
      ...newReview,
      author: "You", // This would be the authenticated user's name
      avatar: "https://placehold.co/48x48/F0F0F0/808080?text=You",
      joined: "New on Airbnb",
      date: "Just Now",
    };
    setReviews([newReviewWithDetails, ...reviews]);
    setShowReviewForm(false);
  };

  if (isLoading) {
    return (
      <div className="mt-8 border-t pt-8 text-center text-gray-500">
        Loading reviews...
      </div>
    );
  }

  return (
    <div className="mt-8 border-t pt-8">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-semibold">
          <i className="fa-solid fa-star"></i> 4.86 · {reviews.length} reviews
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {reviews.slice(0, visibleReviewsCount).map((review, index) => (
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

      <div className="mt-8 flex gap-4">
        {reviews.length > 6 && visibleReviewsCount < reviews.length && (
          <button
            onClick={handleShowAllReviews}
            className="border border-gray-400 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Show all {reviews.length} reviews
          </button>
        )}
        <button
          onClick={handleCreateReview}
          className="border border-gray-400 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200"
        >
          Write a review
        </button>
      </div>

      {showReviewForm && (
        <ReviewForm
          onCancel={() => setShowReviewForm(false)}
          onSubmit={handleNewReviewSubmit}
        />
      )}
    </div>
  );
}
