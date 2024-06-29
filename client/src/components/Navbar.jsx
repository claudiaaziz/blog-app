import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to='/'>Posts</NavLink>
            <NavLink to='/post-form'>Create Post</NavLink>
        </div>
    );
}
