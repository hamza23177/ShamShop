import { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";

import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Slider from "../../components/slider/Slider";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
const Home = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch]);

  // هنا ضمنا أن البيانات التي سوف تأتي هي من نوع لابتوب
  const laptops = products.filter((p) => p.isLaptop === true);
  const mobiles = products.filter((p) => p.isLaptop === false);

  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجديد من اللابتوبات" />
      <Slider isLaptop={true} data={laptops} />
      <HeadingTitle title="الجديد من الموبايلات" />
      <Slider isLaptop={false} data={mobiles} />
      <HeadingTitle title="تسوق حسب الماركيتنغ" />
      <Brands />
    </>
  );
};

export default Home;
