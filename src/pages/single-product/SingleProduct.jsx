import { useParams } from "react-router-dom";
import Rating from "../../components/rating/Rating";
import ProductDescription from "../special-offer-page/ProductDescription";
import "./single-product.css";
import { products } from "../../data/products";
import {useEffect } from "react";

const SingleProduct = () => {
  const { id } = useParams(); // تعريف id أولاً
  const product = products.find((p) => p.id === parseInt(id)); // استخدام id بعد تعريفه
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">$ {product?.price}</div>
          <div className="product-add-to-cart">
            <div>الكمية</div>
            <input type="number" min="1" max="10" />
            <button className="add-to-cart-btn">إضافة إلى سلة التسوق</button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </div>
  );
};

export default SingleProduct;
