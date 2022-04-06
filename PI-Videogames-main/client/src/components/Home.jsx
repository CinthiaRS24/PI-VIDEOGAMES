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


export default function Home() {

    let dispatch = useDispatch();

    const allVideogames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage, setVideogamesPerPage] = useState(15);
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame);
    

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
        dispatch(getVideogames());
    }



    const [order, setOrder] = useState()

    function handlerGenres(e) {
        e.preventDefault();
        dispatch(filterByGenres(e.target.value));
        setCurrentPage(1);
        setOrder("Order" + e.target.value)
    }
    
    function handlerCreated(e) {
        e.preventDefault();
        dispatch(filterByCreated(e.target.value));
        setCurrentPage(1);
        setOrder("Order" + e.target.value)
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

            <h1>AGUANTE VIDEOGAME</h1>

            <button onClick={e => {handleClick(e)}}>
                Volver a cargar todos los videogames
            </button>

            <div>
                
                <Filters handlerGenres={handlerGenres} handlerCreated={handlerCreated}/>
                <OrderBy handlerByName={handlerByName} handlerByRating={handlerByRating}/>
                <Pagination videogamesPerPage={videogamesPerPage} allVideogames={allVideogames.length} pagination={pagination}/>
                
                {
                currentVideogames?.map( el => {
                    return (
                        <div key={el.id}>
                    <CardVideogame name={el.name} genres={el.genres} image = {el.image} rating={el.rating} id={el.id}/>
                    </div>
                    );
                })
                }
            </div>
        </div>
    )

}