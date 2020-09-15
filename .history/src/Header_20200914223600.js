import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@mater'

function Header() {
  return (
    <div className="header">
      <h1>I am header</h1>
      <PersonIcon fontSize="large" className="header__icon" />
    </div>
  );
}

export default Header;
