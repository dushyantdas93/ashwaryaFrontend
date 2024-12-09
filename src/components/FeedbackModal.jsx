import React, { useState } from "react";
import { UsePost } from "../Customhook/UsePost"
import { useAuth } from "../context/auth";

const FeedbackModal = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState(""); // Store feedback input
  const [rating, setRating] = useState(""); // Store rating input

  const [auth, setAuth] = useAuth()


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ feedback, rating }); // Replace with API call to save feedback
    setIsOpen(false); // Close the modal
    const res = UsePost("rating",{ feedback, rating })
    // alert("Thank you for your feedback!");
  };

useState(()=>{
  
  setTimeout(() => {
    setIsOpen(true)
  }, 90000);

},[])
  return (
    <div className="relative ">
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex z-50"
      >
        Give Feedback
      </button>

      {/* Modal */}
      {isOpen && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${auth?.token ? " hidden " : " " }`}>
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">We Value Your Feedback</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>

            {/* Feedback Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  How would you rate your experience?
                </label>
                <select
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select rating</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="feedback"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Share your thoughts
                </label>
                <textarea
                  id="feedback"
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What did you like? What can we improve?"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackModal;
