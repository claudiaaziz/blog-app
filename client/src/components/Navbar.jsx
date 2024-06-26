import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to='/'>Main Page</NavLink>
            <NavLink to='/create-post'>Create Post</NavLink>
        </div>
    );
}
