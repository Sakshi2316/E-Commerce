import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import backgroundImage from "./new.jpg";

const Hero = () => {
  return (
    // <div
    //   className={`relative min-h-[60vh] 800px:min-h-[60vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    //   style={{
    //     backgroundImage:
    //       // "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
    //       `url(${backgroundImage})`,
    //   }}
    // >
    <div className={`${styles.section} w-[100%] 800px:w-[80%] mt-12`}>
      <h1
        className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#272323] font-bold capitalize`}
      >
        Empower Small Businesses. <br /> Connect Customers. <br />
        Transform Ecommerce.
      </h1>
      <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        <h1 className="font-bold">Welcome to our online marketplace!</h1> <br /> Discover locally
        crafted treasures - from home decor to handmade pottery and delicious
        homemade food. With convenient payment options and swift 1-2 day
        delivery, shopping is a breeze. Interested in selling? Click 'Become a
        Seller'! Join us in supporting local artisans today
      </p>
      <Link to="/products" className="inline-block">
        <div className={`${styles.button} mt-7`}>
          <span className="text-[#fff] font-[Poppins] text-[18px]">
            Shop Now
          </span>
        </div>
      </Link>
    </div>
    // </div>
  );
};

export default Hero;
