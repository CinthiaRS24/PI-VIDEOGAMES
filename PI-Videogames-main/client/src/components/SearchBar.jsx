import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../actions";

export default function SearchBar () {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handlerChange(e) {
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch(getVideogamesByName(name));
        setName("");
    }

    return (
        <div>
            <form onSubmit={(e) => handlerSubmit(e)}>
                <input
                type="text"
                placeholder="Buscar..."
                value={name}
                onChange={(e) => handlerChange(e)}
                />

                <button type="submit">Search</button>
            </form>
            
        </div>
    )
}