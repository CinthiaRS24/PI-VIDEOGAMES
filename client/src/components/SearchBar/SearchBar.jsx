import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";
import s from "./SearchBar.module.css"

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
        <div className={s.formClass}>
            <form onSubmit={(e) => handlerSubmit(e)}>
                <input
                type="text"
                placeholder="Search a videogame..."
                value={name}
                onChange={(e) => handlerChange(e)}
                className={s.input}
                />

                <button type="submit" className={s.btn}>Search</button>
            </form>
            
        </div>
    )
}