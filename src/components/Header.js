import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/articles">
        <h1>Financial News</h1>
      </Link>
    </header>
  );
};

export default Header;
