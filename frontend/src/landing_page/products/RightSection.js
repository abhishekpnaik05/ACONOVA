// RightSection.js
import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore
}) => {
  return (
    <div className="product-section right-aligned py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 order-2 order-md-1 pe-md-5">
            <h2 className="display-5 fw-bold mb-3">{productName}</h2>
            <p className="fs-5 text-muted mb-4">{productDescription}</p>
            {learnMore && (
              <button className="btn btn-outline-primary px-4 py-2">
                {learnMore}
              </button>
            )}
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <img 
              src={imageURL} 
              alt={productName}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;