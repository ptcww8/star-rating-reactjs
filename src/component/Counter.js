import React, { useState } from 'react';

const Counter = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return [...Array(12)].map((tit, index) => {
    index += 1;
    return (
      <button
        type="button"
        className={index <= (rating | hover) ? 'on' : 'off'}
        key={index}
        onClick={() => setRating(index)}
        onMouseEnter={() => setHover(index)}
        onMouseLeave={() => setHover(rating)}
      >
        <span className="star">&#9733;</span>
      </button>
    );
  });
};

export default Counter;
