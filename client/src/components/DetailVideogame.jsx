import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogameById } from "../actions";
import { useParams } from "react-router-dom";
import s from "./DetailVideogame.module.css"



export default function Detail() {
    let {id} = useParams();
    let dispatch = useDispatch();
    const detailVideogame = useSelector((state) => state.detail);
    console.log(detailVideogame);    

    useEffect(() => {
        dispatch(getVideogameById(id))
    }, [dispatch])

    

    return (
        <div>
            {
                detailVideogame.name?
                <div className={s.divGeneral}>
                    <div className={s.div}>

                    <h1 className={s.title}>{detailVideogame.name}</h1> <hr className={s.hr}></hr>
                    <div className={s.divAllInfo}>
                        <div className={s.divImg}>
                            <img className={s.img} src={detailVideogame.image}/>
                        </div>
                        <div className={s.info}>
                            <p>{detailVideogame.description}</p>
                            <p>
                                Released: <span>{detailVideogame.released}</span> 
                            </p>
                            <p>
                                Rating: <span>{detailVideogame.rating}</span>
                            </p>
                            <p>
                                Platforms: <span>{detailVideogame.platforms.length > 1? detailVideogame.platforms.join(", ") : "Unspecified platform"}</span>
                            </p>
                            <p>
                                Genres: <span>{detailVideogame.genres.join(", ")}</span>
                            </p>
                        </div>
                    </div>                  
                   </div>

                   <div className={s.divBack}> 
                   <Link to = "/home">
                        <button className={s.btn}>BACK</button>
                    </Link>
                    </div>

                </div> 
                
                
                
                : 
                <div>
                    <p className={s.loading}>Loading</p>
                    <img className={s.loading} src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" width="150px"/>
                </div>
                
            }

            

            
        </div>
    )
}