import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex'>
            <div className='px-3'><Link to='/'>Home</Link></div>
            <div className='px-3'><Link to='/login'>Log in</Link></div>
        </div>
    );
};

export default Header;