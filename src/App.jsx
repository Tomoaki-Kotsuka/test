import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './App.css'

// components
import Edamam from './containers/api/Edamam';
import CreatePost from './containers/CreatePost';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Navber from './containers/Navber';


function App() {

  return (
    <Router>
      <Navber />
      <Routes>
        <Route path='/' element={ <Edamam />}></Route>
        <Route path='/createpost' element={ <CreatePost />}></Route>
        <Route path='/login' element={ <Login />}></Route>
        <Route path='/logout' element={ <Logout />}></Route>
      </Routes>
    </Router>
  )
}

export default App
