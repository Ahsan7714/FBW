import React,{useState} from "react";
import "./Reviews.css";
import review from "../../assets/review.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Reviews = () => {

    const [selectedReview, setSelectedReview] = useState(0);

  const reviewsData = [
    {
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime porro voluptatem quisquam nam facilis cum dolores nemo velit non expedita.',
      name: 'Jodee Sewell'
    },
 {
        text:
          ' dolor  porro voluptatem quisquam nam facilis cum dolores nemo velit non expedita.',
        name: 'Sewell'
      },
      {
        text:
          ' dolor  porro voluptatem quisquam nam facilis cum dolores nemo velit non expedita.',
        name: 'Nowell'
      },
  ];

  const handleDotClick = (index) => {
    setSelectedReview(index);
  };


  return (
    <div className="reviews">
      <div className="reviews-left">
        <img src={review} alt="" />
      </div>
      <div className="reviews-right">
        <FaQuoteLeft className="quote" />
        <span className="reviews-text">
          <p className="review-p">{reviewsData[selectedReview].text}</p>
          <p className="review-name">{reviewsData[selectedReview].name}</p>
        </span>
        <span className="dots">
          {reviewsData.map((review, index) => (
            <GoDotFill
              key={index}
              className={index === selectedReview ? 'selected' : ''}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </span>
      </div>
    </div>
  );
};

export default Reviews;
