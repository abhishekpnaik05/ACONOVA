import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Navbar from "../Navbar";
import Footer from "../Footer";

function PricingPage() {
  return (
    <div className="technology-page">
      {/* Hero Section */}
      <div className="container py-4 py-md-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3">Technology</h1>
            <p className="fs-3 text-muted mb-4">
              Sleek, modern and intuitive trading platforms
            </p>
            <h2 className="fs-4 mb-5">
              Check out our investment offerings →
            </h2>
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="container-fluid px-0">
        <LeftSection
          imageURL="media/images/kite.png"
          productName="Aconova"
          productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          tryDemo="Try Demo"
          learnMore="Learn More"
          googlePlay="https://play.google.com"
          appStore="https://apple.com"
        />

        <RightSection
          imageURL="media/images/console.png"
          productName="Console"
          productDescription="The central dashboard for your Aconova account. Gain insights into your trades and investments with in-depth reports and visualisations."
          learnMore="Learn More"
        />

        <RightSection
          imageURL="media/images/kiteconnect.png"
          productName="Aconova Connect API"
          productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          learnMore="Learn More"
        />

        <LeftSection
          imageURL="media/images/varsity.png"
          productName="Varsity mobile"
          productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          tryDemo="Try Demo"
          learnMore="Learn More"
          googlePlay="https://play.google.com"
          appStore="https://apple.com"
        />
      </div>

      {/* Call to Action */}
      <div className="container py-4 py-md-5">
        <div className="row">
          <div className="col-12 text-center">
            <p className="fs-4">
              Want to know more about our technology stack? Check out the{" "}
              <a href="/blog" className="text-decoration-none fw-bold">
                Aconova.tech blog
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;