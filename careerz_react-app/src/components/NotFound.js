import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../images/notfound.png';

const NotFound = () => (
  <div>
    <center><Link to="/search">Back to search</Link></center>
    <img src={notfound}
      style={{ width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }}
    />

  </div>
);
export default NotFound;