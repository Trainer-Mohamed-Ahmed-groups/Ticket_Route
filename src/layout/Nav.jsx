import { Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';

export default function SiteNav() {
    return (
        <Navbar fluid>
            <Link to="/">
                <img src="/logo_light_transparent.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className='mx-auto'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
}
