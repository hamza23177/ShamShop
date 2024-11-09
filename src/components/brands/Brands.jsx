import { brands } from "../../data/brands";
import "./brands.css";

const Brands = () => {
  return (
    <div className="brands-wrapper">
      {brands.map((brand) => (
        <div className="brand" key={brand.id}>
          <img src={brand.image} alt="" className="brand-image" />
        </div>
      ))}
    </div>
  );
};

export default Brands;
