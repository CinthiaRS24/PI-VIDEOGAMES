import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, filterByGenres, filterByCreated } from "../actions";
import s from "./Filters.module.css"

export default function Filters({handlerGenres, handlerCreated, source}) {

const dispatch = useDispatch();

const genres = useSelector(state => state.genres);



useEffect(() => {
    dispatch(getGenres());
}, []);

// function handlerGenres(e) {
//     e.preventDefault();
//     dispatch(filterByGenres(e.target.value));
// }

// function handlerCreated(e) {
//     e.preventDefault();
//     dispatch(filterByCreated(e.target.value));
// }

    return (
        <div>

            <p className={s.titles}>SOURCE</p>

            <div className={s.divSource}>
                <button style={source === "All"? {backgroundColor: "#280783", color: "white", borderColor: "white"} : undefined} className={s.source} onClick={() => handlerCreated('All')} >ALL</button>
                <button style={source === "Created"? {backgroundColor: "#280783", color: "white", borderColor: "white"} : undefined} className={s.source} onClick={() => handlerCreated('Created')}>CREATED</button>
                <button style={source === "Api"? {backgroundColor: "#280783", color: "white", borderColor: "white"} : undefined} className={s.source} onClick={() => handlerCreated('Api')}>RAWG</button>
            </div>

            {/* <select  onChange={(e) => handlerCreated(e)}>
                <option value=''>Filter By Existing/Created</option>
                <option value='All'>All</option>
                <option value='Api'>Api</option>
                <option value='Created'>Created</option>
            </select> */}

            <p className={s.titles}>GENRES</p>

            <select onChange={(e) => handlerGenres(e)} className={s.select}>
                <option value=''>--Select--</option>
                <option value='All'>All</option>
                {
                    genres && genres.map(g => (
                        <option value={g.name} key={g.id}>{g.name}</option>
                    ))
                }
            </select>

        </div>
    )

}