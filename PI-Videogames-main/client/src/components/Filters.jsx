import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, filterByGenres, filterByCreated } from "../actions";

export default function Filters({handlerGenres, handlerCreated}) {

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
            <select onChange={(e) => handlerGenres(e)}>
                <option value=''>Filter By Gender</option>
                <option value='All'>All</option>
                {
                    genres && genres.map(g => (
                        <option value={g.name} key={g.id}>{g.name}</option>
                    ))
                }
            </select>

            <select  onChange={(e) => handlerCreated(e)}>
                <option value=''>Filter By Existing/Created</option>
                <option value='All'>All</option>
                <option value='Api'>Api</option>
                <option value='Created'>Created</option>
            </select>

        </div>
    )

}