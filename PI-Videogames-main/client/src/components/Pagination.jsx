import React from "react";
import s from "./Pagination.module.css"


export default function Pagination ({videogamesPerPage, allVideogames, pagination}) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allVideogames/videogamesPerPage); i++) {
        pageNumbers.push(i + 1);
        
    }

    return (
        <nav>
            <ul className={s.button}>
                {pageNumbers && pageNumbers.map(number => (
                    <li key={number}>
                        <button onClick={() => pagination(number)}>{number}</button>
                    </li>
                   
                ))}
            </ul>
        </nav>
    )

}