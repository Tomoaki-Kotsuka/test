import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

function Navber() {
  return (
    <nav className="navbers">
        
        <Link to="/">ホーム</Link>
        <Link to="/createpost">お気に入り</Link>
        <Link to="/login">ログイン</Link>
    </nav>
  )
}

export default Navber