import React from "react";
import { Link } from "react-router-dom";
import s from "./CardVideogame.module.css"

export default function CardVideogame({name, genres, image, rating, id}) {
    return (
        <Link to={`/videogame/${id}`}>
            <div className={s.div}>
                <h3 className={s.title}>{name}</h3>
                <img className={s.imgs} src={image} alt="img not found"/>
                <div className={s.afterImg}>
                    <p className={s.text}>{genres.join(", ")}</p>
                    <p className={s.rating} style={
            rating < 1
              ? { backgroundColor: "rgb(255, 77, 91)" }
              : rating < 4
              ? { backgroundColor: "rgb(253, 158, 81)" }
              : { backgroundColor: "rgb(4, 201, 4)" }
          }>{rating}</p>
                </div>
                
            </div>
        </Link>
    )
}