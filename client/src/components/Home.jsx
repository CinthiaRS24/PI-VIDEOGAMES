import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../actions";
import Nav from "./Nav";
import CardVideogame from "./CardVideogame";
import Pagination from "./Pagination";
import Filters from "./Filters";
import OrderBy from "./OrderBy";
import { filterByGenres, filterByCreated } from "../actions";
import { orderByName, orderByRating } from "../actions";
import { Link } from "react-router-dom";
import s from "./Home.module.css"


export default function Home() {

    let dispatch = useDispatch();

    const allVideogames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage, setVideogamesPerPage] = useState(15);
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame);
    
    const [source, setSource] = useState("All");

// 0     6    0-5
// 6    12    6-11
// 12   18    12-17

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    useEffect(() => {
        dispatch(getVideogames());
    }, []);

    function handleClick(e) {
        e.preventDefault();
        // dispatch(getVideogames());
        window.location.reload()
    }



    const [order, setOrder] = useState()

    function handlerGenres(e) {
        e.preventDefault();
        dispatch(filterByGenres(e.target.value));
        setCurrentPage(1);
        setOrder("Order" + e.target.value)
    }
    
    function handlerCreated(e) {
        dispatch(filterByCreated(e));
        console.log(e);
        setSource(e);
        setCurrentPage(1);
        setOrder("Order" + e)
    }

    function handlerByName(e) { //no puedo pasar un estado local a otro componente?
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)                       // este renglón es para que cada vez que ordene me lleve a la pag1?
        setOrder("Order" + e.target.value) // para qué es? no veo cambios. supuestamente para renderizar
    }

    function handlerByRating(e) { //no puedo pasar un estado local a otro componente?
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);                       // este renglón es para que cada vez que ordene me lleve a la pag1?
        setOrder("Order" + e.target.value); // para qué es? no veo cambios. supuestamente para renderizar
    }




    return (
        <div>

            <Nav/>

            <div className={s.divTwoColum}>
                
                <div className={s.firstColum}>
                    <OrderBy handlerByName={handlerByName} handlerByRating={handlerByRating}/>
                    <Filters handlerGenres={handlerGenres} handlerCreated={handlerCreated} source={source}/>
                    <button onClick={e => {handleClick(e)}} className={s.btn}>
                        RESET
                    </button>
                </div>

                <div className={s.secondColum}>
                    <h1 className={s.title}>VIDEOGAME INFORMATION</h1>
                
                    <Pagination videogamesPerPage={videogamesPerPage} allVideogames={allVideogames.length} pagination={pagination} currentPage={currentPage}/>
                    
                    <div className={s.home}>
                    <Link to='/'>
                        <button className={s.btnLeave}>EXIT</button>
                    </Link>

                    {currentVideogames.length > 0 ?
                    <div className={s.divCards}>
                        {currentVideogames.map( el => {
                            return (
                                <div key={el.id}>
                                    <CardVideogame name={el.name} genres={el.genres} image = {el.image} rating={el.rating} id={el.id}/>
                                </div>
                            );
                        })}
                    </div> : 
                        <div className={s.loading}>
                            Loading ...
                        </div>}
                    </div>
                </div>

            </div>

        </div>
    )

}