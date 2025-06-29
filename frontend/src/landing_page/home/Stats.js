import React from 'react';

const Stats = () => {
  return (
    <div className="container p-0 p-md-3">
      <div className="row p-2 p-md-5">
        {/* Text Content Column */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
          <h1 className="fs-2 mb-3 mb-md-5">Trust with confidence</h1>
          
          <div className="mb-4 mb-md-5">
            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted">
              Crores worth of transactions executed securely
            </p>
          </div>

          <div className="mb-4 mb-md-5">
            <h2 className="fs-4">Minimal. Transparent. Focused on You</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4 mb-md-5">
            <h2 className="fs-4">The Aconova universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in Built by investors, 
              for investors. Backed by next-gen technology offer you tailored services 
              specific to your needs.
            </p>
          </div>

          <div className="mb-4 mb-md-5">
            <h2 className="fs-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Tools to help you invest wisely like 'Smart Alerts' 
              and 'Risk GuardTools to help you invest wisely, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-1 order-md-2">
          <img 
            src="media/images/ecosystem.png" 
            className="img-fluid" 
            style={{ maxWidth: "100%", height: "auto" }} 
            alt="Aconova Ecosystem"
          />
          
          <div className="text-center mt-3 mt-md-5">
            <a 
              href="#products" 
              className="mx-2 mx-md-5 btn btn-outline-primary"
            >
              Explore products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a 
              href="#demo" 
              className="btn btn-primary"
            >
              Try demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;