import React, { useState } from "react";
import data from "./Reviews";
import Styles from "./Review.module.scss";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [reviews, setReviews] = useState(0);
  const { image, job, name, text } = data[reviews];
  console.log(data.length - 1);
  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
  };

  const prevPersonHandler = () => {
    setReviews((reviews) => {
      let newReview = reviews - 1;
      return checkNumber(newReview);
    });
  };
  const nextPersonHandler = () => {
    setReviews((reviews) => {
      let newReview = reviews + 1;
      return checkNumber(newReview);
    });
  };

  const surpriseMeHandler = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === reviews) {
      randomNumber = reviews + 1;
    }
    setReviews(checkNumber(randomNumber));
  };

  return (
    <article>
      <div className={Styles.review}>
        <div className={Styles["review__imgContain"]}>
          <img className={Styles["review__img"]} src={image} alt="" />
          <span className={Styles["review__icon"]}>
            <FaQuoteRight />
          </span>
        </div>
        <h3 className={Styles["review__name"]}>{name}</h3>
        <p className={Styles["review__job"]}>{job}</p>
        <p className={Styles["review__text"]}>{text}</p>
        <div className={Styles["review__btnContain"]}>
          <button
            className={Styles["review__prevBtn"]}
            onClick={prevPersonHandler}
          >
            <FaChevronLeft />
          </button>
          <button
            className={Styles["review__nextBtn"]}
            onClick={nextPersonHandler}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className={Styles["review__surprise"]}
          onClick={surpriseMeHandler}
        >
          Surprise me
        </button>
      </div>
    </article>
  );
}
export default Review;
