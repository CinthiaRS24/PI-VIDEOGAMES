import React from 'react';
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav ({onSearch}) {
    return (
        <nav className={s.nav}>

            <Link to='/home'>
                <span className={s.text}>HOME</span>
            </Link>

            <Link to='/create'>
                <span className={s.text}>CREATE</span>
            </Link>

            <Link to='/about'>
                <span className={s.text}>ABOUT</span>
            </Link>

            <SearchBar />

        </nav> 
    )
}