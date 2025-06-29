// LeftSection.js
import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) => {
  return (
    <div className="product-section left-aligned py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img 
              src={imageURL} 
              alt={productName}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px" }}
            />
          </div>
          <div className="col-12 col-md-6 ps-md-5">
            <h2 className="display-5 fw-bold mb-3">{productName}</h2>
            <p className="fs-5 text-muted mb-4">{productDescription}</p>
            <div className="d-flex flex-wrap gap-3">
              {tryDemo && (
                <button className="btn btn-primary px-4 py-2">
                  {tryDemo}
                </button>
              )}
              {learnMore && (
                <button className="btn btn-outline-primary px-4 py-2">
                  {learnMore}
                </button>
              )}
            </div>
            {(googlePlay || appStore) && (
              <div className="mt-4">
                <p className="mb-2">Download on:</p>
                <div className="d-flex gap-3">
                  {googlePlay && (
                    <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                      <img 
                        src="media/images/google-play-badge.png" 
                        alt="Get on Google Play"
                        style={{ height: "50px" }}
                      />
                    </a>
                  )}
                  {appStore && (
                    <a href={appStore} target="_blank" rel="noopener noreferrer">
                      <img 
                        src="media/images/app-store-badge.png" 
                        alt="Download on the App Store"
                        style={{ height: "50px" }}
                      />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;