import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
  return (
    <div className="header">
      <h1>I am header</h1>
      <PersonIcon fontSize="large" className/>
    </div>
  );
}

export default Header;
