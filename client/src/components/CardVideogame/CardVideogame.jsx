import React from "react";
import { Link } from "react-router-dom";
import s from "./CardVideogame.module.css"
import { deleteVideogame } from "../../actions";
import { getVideogames } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function CardVideogame({name, genres, image, rating, id, createdInDb}) {

    let dispatch = useDispatch();

    function handleclicks(id) {
        console.log('id', id)
        dispatch(deleteVideogame(id));
        dispatch(getVideogames())
    }




    return (
        
            <div className={s.div}>
                    <Link to={`/videogame/${id}`}>
                <h3 className={s.title}>{name}</h3>
                </Link>
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
                <div>
                  {
                      createdInDb === true ? <button className={s.btnDelete} onClick={() => handleclicks(id)}>X</button> : undefined
                  }

                     
                </div>
                
            </div>
       
    )
}