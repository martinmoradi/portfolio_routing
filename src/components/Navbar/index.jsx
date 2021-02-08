import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home  </Link>
        <Link to="About">About   </Link>
        <Link to="Contact">Contact   </Link>
        <Link to="Works">Works   </Link>   
    </div>
  );
}

export default Navbar
