import React from 'react';
import './header.css';

function Header(props) {
  return (
    <div className="nav">
      <ul>
        <li className="tutorials">
          <a className="active" href="#">
            Currencies
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
