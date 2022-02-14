import React, { useState } from "react";
import data from "./Reviews";
import Styles from "./Review.module.scss";

function Review() {
  const [reviews, setReviews] = useState(data);

  return (
    <article>
      {reviews.map((review) => {
        const { id, image, job, name, text } = review;
        return (
          <div className={Styles.review} key={id}>
            <div className={Styles["review__imgContain"]}>
              <img className={Styles["review__img"]} src={image} alt="" />
            </div>
            <h3 className={Styles["review__name"]}>{name}</h3>
            <p className={Styles["review__job"]}>{job}</p>
            <p className={Styles["review__text"]}>{text}</p>
          </div>
        );
      })}
    </article>
  );
}

export default Review;
