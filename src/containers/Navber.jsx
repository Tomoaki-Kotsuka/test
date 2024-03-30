import React from 'react'
import { Link } from 'react-router-dom'

function Navber() {
  return (
    <nav>
        
        <Link to="/">ホーム</Link>
        <Link to="/createpost">お気に入り</Link>
        <Link to="/login">ログイン</Link>
    </nav>
  )
}

export default Navber