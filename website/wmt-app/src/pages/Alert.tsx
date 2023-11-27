import React from 'react';
import { Link } from "react-router-dom";

const AlertPage: React.FC = () => {
  return (
    <div className="forbidden-container">
      <h1>Oops!</h1>
      <p>You need to connect your wallet address to access this page</p>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default AlertPage;
