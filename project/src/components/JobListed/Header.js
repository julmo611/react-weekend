import React from 'react'
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        
        <header>
            <h1>Add Job</h1>
            <button className="btn"><Link to="/">Home</Link></button>
        </header>

    )
}

export default Header;