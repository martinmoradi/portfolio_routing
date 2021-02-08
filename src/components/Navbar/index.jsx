import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home  </Link>
        <Link to="/about">About   </Link>
        <Link to="/contact">Contact   </Link>
        <Link to="/works">Works   </Link>   
    </div>
  );
}

export default Navbar
