import React from 'react';
import SearchBar from './SearchBar.jsx';
// import s from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav ({onSearch}) {
    return (
        <nav>

            <Link to='/home'>
                <span>HOME</span>
            </Link>

            <Link to='/create'>
                <span>Create</span>
            </Link>

            <SearchBar />

        </nav> 
    )
}