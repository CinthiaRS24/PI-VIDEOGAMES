import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogameById } from "../actions";
import { useParams } from "react-router-dom";



export default function Detail() {
    //console.log(props)
    let {id} = useParams();
    let dispatch = useDispatch;
    const detailVideogame = useSelector((state) => state.detail);
    

    useEffect(() => {
        dispatch(getVideogameById(id))
        return () => {
            dispatch(getVideogameById())
        }
    }, [id])

    

    return (
        <div>
            {
                detailVideogame.length > 0 ?
                <div>
                    <h1>{detailVideogame.name}</h1>
                    <img src={detailVideogame.image}/>
                    <h3>{detailVideogame.rating}</h3>
                    {detailVideogame.genres?.map(g => 
                        <h4>{g}</h4>)}
                    <h5>{detailVideogame.description}</h5>
                </div> : <p>Loading...</p>
            }
            <Link to = "/home">
                <button>Volver</button>
            </Link>
        </div>
    )
}