import React from "react";
import { Link } from "react-router-dom";

export default function CardVideogame({name, genres, image, rating, id}) {
    return (
        <Link to={`/videogame/${id}`}>
            <div>
                <h3>{name}</h3>
                <h5>{genres}</h5>
                <h5>{rating}</h5>
                <img src={image} alt="img not found" width="200px" height="200px"/>
            </div>
        </Link>
    )
}