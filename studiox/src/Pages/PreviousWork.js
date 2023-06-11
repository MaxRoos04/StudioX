import React from 'react';
import { Link } from 'react-router-dom';

const PreviousWork = () => {
  return (
    <div>
      <Link to="/Portfolio">Previous Work</Link> {/* Add the link to the AboutPage */}
      <h1>PreviousWork</h1>
      <p>-_-</p>
    </div>
  );
};

export default PreviousWork;
