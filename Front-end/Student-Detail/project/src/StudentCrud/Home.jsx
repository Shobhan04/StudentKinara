import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Home = () => {
  return (
    
    <div>
        <header>
        <nav className="navbar navbar-expand-lg bg-black ">
  <div className="container-fluid">


    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link active text-light" aria-current="page" href="#">Home</Link>
        <Link to="/register" className="nav-link text-light" href="#">Register</Link>
        <Link to="/display" className="nav-link text-light" href="#">Display</Link>
        <Link to="/page" className="nav-link text-light" href="#">Page</Link>

     
      </div>
    </div>
  </div>
</nav>
</header>
<div id='body'></div>



    </div>
  )
}

export default Home