import React from 'react';
import { Link } from "react-router-dom";

const ForbiddenPage: React.FC = () => {
  return (
    <div className="forbidden-container">
      <h1>403</h1>
      <h3>Forbidden</h3>
      <p>You don't have permission to access this page.</p>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default ForbiddenPage;
