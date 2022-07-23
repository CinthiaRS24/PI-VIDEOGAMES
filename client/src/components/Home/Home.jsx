import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Nav from "../Nav/Nav";
import CardVideogame from "../CardVideogame/CardVideogame";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";
import OrderBy from "../OrderBy/OrderBy";
import { filterByGenres, filterByCreated } from "../../redux/actions";
import { orderByName, orderByRating } from "../../redux/actions";
import { Link } from "react-router-dom";
import s from "./Home.module.css"
import imgDefault from "../../images/imgDefault.png"


export default function Home() {

    let dispatch = useDispatch();

    const allVideogames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage] = useState(15);
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame);
    const [source, setSource] = useState("All");
    const [namechange, setNamechange] = useState('');
    const [ratingchange, setRatingchange] = useState('');
    const [genrechange, setGenrechange] = useState('');
    const [, setOrder] = useState()

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch]);


    function handleClick(e) {
        e.preventDefault();
        dispatch(getVideogames());
        setNamechange("");
        setRatingchange("");
        setGenrechange("")
        setCurrentPage(1);
        setSource("All");
        // window.location.reload()
    }

    function handlerGenres(e) {
        e.preventDefault();
        dispatch(filterByGenres(e.target.value));
        setCurrentPage(1);
        setSource("All");
        setGenrechange(e.target.value);
        setOrder("Order" + e.target.value)
    }
    
    function handlerCreated(e) {
        dispatch(filterByCreated(e));
        console.log(e);
        setSource(e);
        setCurrentPage(1);
        setGenrechange("");
        setOrder("Order" + e)
    }

    function handlerByName(e) { //no puedo pasar un estado local a otro componente?
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setRatingchange("");
        setNamechange(e.target.value);                      
        setOrder("Order" + e.target.value) 
    }

    function handlerByRating(e) { 
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);   
        setNamechange("");                   
        setRatingchange(e.target.value); 
        setOrder("Order" + e.target.value); 
    }


    return (
        <div>

            <Nav/>

            <div className={s.divTwoColum}>
                
                <div className={s.firstColum}>
                    <OrderBy handlerByName={handlerByName} handlerByRating={handlerByRating} namechange={namechange} ratingchange={ratingchange}/>
                    <Filters handlerGenres={handlerGenres} handlerCreated={handlerCreated} source={source} genrechange={genrechange}/>
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
                                        <CardVideogame name={el.name} genres={el.genres} image = {el.image ? el.image : imgDefault} rating={el.rating} id={el.id} createdInDb={el.createdInDb}/>
                                    </div>
                                );
                            })}
                        </div> 
                        : 
                        <div className={s.divLoading}>
                            <img className={s.loading} src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif" alt="Img not found" width="150px"/>
                        </div>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}