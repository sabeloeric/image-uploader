import React from 'react'
import { Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/register">Create Account</Link>
            <Link to="/signin">Login</Link>
        </div>
    )
}
