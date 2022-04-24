import React from "react";
import s from "./Pagination.module.css"


export default function Pagination ({videogamesPerPage, allVideogames, pagination, currentPage}) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allVideogames/videogamesPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav>
            <ul className={s.button}>
                {pageNumbers && pageNumbers.map(number => (
                    <div key={number}>
                        <button onClick={() => pagination(number)} className={s.eachBtn} style={currentPage === number ? {backgroundColor: "#280783", color: "white", borderColor:"white" , fontSize: "20px"} : undefined}>{number}</button>
                    </div>
                   
                ))}
            </ul>
        </nav>
    )
}