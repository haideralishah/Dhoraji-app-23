import React, { Component } from 'react';
import { Link } from "react-router-dom";

const navStyle = {
    display: 'inline',
    margin: '30px'
}

class Navbar extends Component {
    render() {
        return (
            <ul style={navStyle}>
                <Link to="/"><li style={navStyle}>Home</li></Link>
                <Link to="/list"><li style={navStyle}>List</li></Link>

                <Link to="/about"><li style={navStyle}>About</li></Link>
                <Link to="/contact"><li style={navStyle}>Contact</li></Link>
            </ul>
        )
    }
}
export default Navbar;





