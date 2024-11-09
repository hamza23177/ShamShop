import { useState } from "react";
import Rating from "../rating/Rating";
import "./slider.css";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

const Slider = ({ isLaptop }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const filteredData = products.filter((product) => product.isLaptop === isLaptop);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "right" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    if (direction === "left" && slideIndex < filteredData.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="slider-container">
      <button
        disabled={slideIndex === 0}
        onClick={() => handleClick("right")}
        className="bi bi-chevron-left arrow-left"
      ></button>
      <div
        style={{ transform: `translateX(${slideIndex * 250}px)` }}
        className="slider-wrapper"
      >
        {filteredData.map((item) => (
          <Link to={`/products/${item.id}`} className="slide" key={item.id}>
            <img src={item.image} alt={item.title} className="slide-img" />
            <h3 className="slide-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="slide-price">ل.س{item.price}</div>
          </Link>
        ))}
      </div>
      <button
        disabled={slideIndex === filteredData.length - 1}
        onClick={() => handleClick("left")}
        className="bi bi-chevron-right arrow-right"
      ></button>
    </div>
  );
};

export default Slider;
