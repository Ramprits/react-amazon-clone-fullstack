import React from "react";
import "../styles/home.css";
import Product from "../Components/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://res.cloudinary.com/rps-technologies/image/upload/v1599623722/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt="logo"
          className="home__image"
        />
        <div className="home__row">
          <Product
            title="Ben Martin helps people navigate the world easily and simply with the highest products. Ben Martin came out of a space in the market where we saw almost not Fine"
            price="307"
            rating={3}
            imgUrl="https://res.cloudinary.com/rps-technologies/image/upload/v1599627839/91H0qg6PmTL._UL1500_.jpg"
          />
          <Product
            title=" perfect size with a luxurious feel and contrasting threading to keep up with consistent and long-term use - for years"
            price="250.00"
            rating={4}
            imgUrl="https://res.cloudinary.com/rps-technologies/image/upload/v1599627836/61NFQpzHwyL._UL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="something right. All of Ben Martin's Products are with 100% pre-shrunk and pill-resistant cotton. "
            price={29.99}
            rating={3}
            imgUrl="https://res.cloudinary.com/rps-technologies/image/upload/v1599625218/61etEyyGxtL._UL1440_.jpg"
          />
          <Product
            title="cts under Ben Martin. The bottom line is we love our admirers, and our admirers love our products."
            price={598.0}
            rating={5}
            imgUrl="https://res.cloudinary.com/rps-technologies/image/upload/v1599627839/61rKAbXRP0L._UL1200_.jpg"
          />
          <Product
            title="come back for more. We must be doing something right. All of Ben Martin's Products are with 100% pre-shrunk and pill-resistant"
            price={799.0}
            rating={5}
            imgUrl="https://res.cloudinary.com/rps-technologies/image/upload/v1599628088/51uG6u0XUTL._UL1024_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="We make the best Clothing, at the most competitive across the industry. A Few Of The Reasons You Should get From Us"
            price={799.0}
            rating={5}
            imgUrl="https://res.cloudinary.com/rps-technologies/image/upload/v1599628089/61vuXKlZfML._UL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
