import React from "react";
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
            <select onChange={(e) => handlerByName(e)}>
                <option value=''>Order By Name</option>
                <option value='asc'>Ascending (A - Z)</option>
                <option value='desc'>Descending (Z - A)</option>
            </select>

            <select onChange={(e) => handlerByRating(e)}>
                <option value=''>Order By Rating</option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
        </div>
    )

}

