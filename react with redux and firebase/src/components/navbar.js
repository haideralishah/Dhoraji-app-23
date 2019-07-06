import React from 'react';
import {
    Link
} from 'react-router-dom';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" >Chat App</a>
                </div>
                <ul className="nav navbar-nav">
                    <li> <Link to='/signup'> signup</Link></li>
                    <li> <Link to='/signin'> signin</Link></li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Navbar;