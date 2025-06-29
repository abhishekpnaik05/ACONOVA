import React from 'react';

const CreateTicket = () => {
  return (
    <div className="container p-3 p-md-5">
      <h1 className="fs-3 fs-md-2 mb-4 mb-md-5">To create a ticket, select a relevant topic</h1>
      
      <div className="row">
        {/* Column 1 - Account Opening */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-light">
              <h4 className="mb-0">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> 
                Account Opening
              </h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Individual (Resident)</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Minor Account Setup</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">NRI (Non-Resident Indian) Accounts</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Corporate, Partnership, HUF & LLP</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Glossary of Terms</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Charges at Aconova</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Getting Started</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 2 - Your Aconova Account */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-light">
              <h4 className="mb-0">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> 
                Your Aconova Account
              </h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">View / Edit My Profile</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Account Modifications</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">CMR (Client Master Report) & DP Info</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Nominee Setup</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Transfer / Convert Securities</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 3 - AcoTrade */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-light">
              <h4 className="mb-0">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> 
                AcoTrade (Trading Platform)
              </h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">IPO Applications</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Trading FAQs</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Margin Trading & Leverage</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Charts, Orders & Execution</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Notifications and Alerts</a></li>
                <li><a href="#" className="text-decoration-none text-dark">General Platform Help</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Additional Columns */}
      <div className="row mt-4">
        {/* Column 4 - Funds */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-light">
              <h4 className="mb-0">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> 
                Funds
              </h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Add Funds</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Withdraw Funds</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Link Bank Accounts</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Manage eMandates</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 5 - AcoConsole */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-light">
              <h4 className="mb-0">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> 
                AcoConsole (Dashboard)
              </h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Portfolio Overview</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Corporate Actions</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Fund Statements</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Reports & Downloads</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Profile Settings</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Market Segments</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 6 - AcoInvest */}
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-light">
              <h4 className="mb-0">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> 
                AcoInvest (Mutual Funds & Retirement)
              </h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Mutual Funds</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">National Pension System (NPS)</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Features on AcoInvest</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Payments & Order Tracking</a></li>
                <li><a href="#" className="text-decoration-none text-dark">General Help</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;