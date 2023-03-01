import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <section id="header">
    <a href="#" style={{textDecoration: "none", color: "black", fontSize: "2rem"}}>al-afra</a>
    <div>
        <ul id="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Register">Log in</Link></li>
            <li id="lg-bag"><i class="far fa-shopping-bag"></i></li>
            <a href="#" id="close"><i class="far fa-times"></i></a>
        </ul>
    </div>
    <div id="mobile">
        <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
        <i id="bar" class="fas fa-outdent"></i>
    </div>
</section>

  );
}

export default Navbar;
