import React, { useState } from "react";
import data from "./Reviews";
import Styles from "./Review.module.scss";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [reviews, setReviews] = useState(0);
  const { id, image, job, name, text } = data[reviews];

  return (
    <article>
      <div className={Styles.review} key={id}>
        <div className={Styles["review__imgContain"]}>
          <img className={Styles["review__img"]} src={image} alt="" />
          <span className={Styles["quote-icon"]}>
            <FaQuoteRight />
          </span>
        </div>
        <h3 className={Styles["review__name"]}>{name}</h3>
        <p className={Styles["review__job"]}>{job}</p>
        <p className={Styles["review__text"]}>{text}</p>
        <div className={Styles["review__btnContain"]}>
          <button className={Styles["review__prevBtn"]}>
            <FaChevronLeft />
          </button>
          <button className={Styles["review__nextBtn"]}>
            <FaChevronRight />
          </button>
        </div>
        <button className={Styles["review__surprise"]}>Surprise me</button>
      </div>
    </article>
  );
}

export default Review;
