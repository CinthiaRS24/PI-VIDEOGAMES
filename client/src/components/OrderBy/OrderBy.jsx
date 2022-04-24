import React from "react";
import s from "./OrderBy.module.css"

export default function OrderBy({handlerByName, handlerByRating, namechange, ratingchange}) {

    return (
        <div>

            <p className={s.titles}>SORT BY</p>

            <div className={s.divName}>
                <label className={s.subTitles}>Name </label>
                <select value={namechange} onChange={(e) => handlerByName(e)} className={s.selects}>
                    <option value=''>--Select--</option>
                    <option value='asc'>(A - Z)</option>
                    <option value='desc'>(Z - A)</option>
                </select>
            </div>

            <div className={s.divRating}>
                <label className={s.subTitles}>Rating</label>
                <select value={ratingchange} onChange={(e) => handlerByRating(e)} className={s.selects}>
                    <option value=''>--Select--</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
            </div>
        </div>
    )

}

