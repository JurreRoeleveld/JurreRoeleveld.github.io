import { ReviewCard } from '../components';
import { reviews } from '../constants';

const CustomerReviews = () => {
  return (
    <section className="max-container" id="reviews">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Wat zeggen onze
        <span className="text-main-color"> klanten </span>?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Succesverhalen uit het verleden.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
