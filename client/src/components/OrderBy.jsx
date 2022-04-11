import React from "react";
import s from "./OrderBy.module.css"
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { orderByName } from "../actions";

export default function OrderBy({handlerByName, handlerByRating}) {

//const dispatch = useDispatch();

//const [order, setOrder] = useState()

// function handlerByName(e) {
//     e.preventDefault();
//     dispatch(orderByName(e.target.value));
//     // setCurrentPage(1)
//     // setOrder("Order" + e.target.value)
// }



    return (
        <div>

            <p className={s.titles}>SORT BY</p>

            <div className={s.divName}>
                <label className={s.subTitles}>Name </label>
                <select onChange={(e) => handlerByName(e)} className={s.selectNR}>
                    <option value=''>--Select--</option>
                    <option value='asc'>(A - Z)</option>
                    <option value='desc'>(Z - A)</option>
                </select>
            </div>

            <div className={s.divRating}>
                <label className={s.subTitles}>Rating</label>
                <select onChange={(e) => handlerByRating(e)} className={s.selectNR}>
                    <option value=''>--Select--</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
            </div>
        </div>
    )

}

