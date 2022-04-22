import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postVideogames, getGenres } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import s from "./CreateVideogame.module.css"
import imgDefault from "../images/imgDefault.png"

export default function CreateVideogame() {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(state => state.genres);

    const platformsApi = [
        "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox",
        "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]

    const [input, setInput] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        platforms: [],
        image: "",
        genres: []
    })



    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    function handleSelectPlatforms(e) {
        setInput({
            ...input,
            platforms: input.platforms.includes(e.target.value) ? input.platforms : [...input.platforms, e.target.value]
        });
    }

    function handleDeletePlatforms(el) {
        setInput({
            ...input,
            platforms: input.platforms.filter(p => p !== el)
        });
    }

    function handleSelectGenres(e) {
        setInput({
            ...input,
            genres: input.genres.includes(e.target.value) ? input.genres : [...input.genres, e.target.value]
        });
    }

    function handleDeleteGenres(el) {
        setInput({
            ...input,
            genres: input.genres.filter(g => g !== el)
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (input.image === "") {setInput({
            ...input,
            image: {imgDefault}
        })} 
        console.log(input);
        dispatch(postVideogames(input));
        alert("Personaje Creado")
        setInput({
            name: "",
            description: "",
            released: "",
            rating: "",
            platforms: [],
            image: "",
            genres: []
        })
        history.push("/home")
    }

    useEffect(() => {
        dispatch(getGenres());
    }, []);



    // function showCheckboxes(){
    //     var checkboxes = document.getElementById("checkboxes");
    //     checkboxes.style.display= "none";
    //     // if(checkboxes.style.contains("hide")) {
    //     //     checkboxes.style.remove("hide");
    //     // } else {
    //     //     checkboxes.style.add("hide");
    //     // }
    // }

    return(
        <div className={s.divGeneral}>

            <Nav/>

            <div className={s.divCreate}>

                <h1 className={s.title}>New Videogame</h1>

                <form  onSubmit={(e) => {handleSubmit(e)}}>
                    <div className={s.data}>
                        <div className={s.firstColumn}>

                            <div>
                                <label>Name: <br></br></label>
                                <input
                                    type="text"
                                    value={input.name}
                                    name= "name"
                                    onChange={(e) => handleChange(e)}
                                    required={true}
                                    placeholder="Videogame"
                                    className={s.input}
                                />
                            </div>

                            <br></br>

                            <div>
                                <label>Description: <br></br></label>
                                <textarea
                                    type="text"
                                    value={input.description}
                                    name= "description"
                                    onChange={(e) => handleChange(e)}
                                    required={true}
                                    placeholder="Enter a description"
                                    className={s.inputDescription}
                                />
                            </div>

                            <br></br>

                            <div>
                                <label>Image: <br></br></label>
                                <input
                                    type="text"
                                    value={input.image}
                                    name= "image"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Img URL"
                                    className={s.input}
                                />
                            </div>

                        </div>


                        <div className={s.secondColumn}>

                            <div>
                                <label>Released: <br></br></label>
                                <input
                                    type="date"
                                    value={input.released}
                                    name= "released"
                                    onChange={(e) => handleChange(e)}
                                    className={s.input}
                                />
                            </div>
                            <br></br>
                            <div>
                                <label>Platforms: <br></br></label>

                                <select className={s.input} required={true} onChange={(e) =>{handleSelectPlatforms(e)}}>
                                    <option value="">Choose 1 or more</option>
                                    {
                                        platformsApi && platformsApi.map((p, index) => (
                                            <option key={index} value={p}>{p}</option>
                                        ))
                                    }
                                </select>

                                {
                                    input.platforms.map((el, index) =>
                                        <div key={index} className={s.divMultiSelect}>
                                            <p className={s.multiSelect}>{el}</p>
                                            <button className={s.btnMultiSelect} onClick={() => {handleDeletePlatforms(el)}}>X</button>
                                        </div>
                                    )
                                }
                            </div>

                        </div>

                        <div>

                            <div>
                                <label>Rating: <br></br></label>
                                <input
                                    type="number"
                                    value={input.rating}
                                    name= "rating"
                                    onChange={(e) => handleChange(e)}
                                    className={s.input}
                                    step = {0.01}
                                    placeholder= "0.00 - 5.00"
                                    min= {0.00}
                                    max= {5}
                                />
                            </div>

                            <br></br>

                            <div>
                                <label>Genres: <br></br></label>
                                <select className={s.input} onChange={(e) =>{handleSelectGenres(e)}}>
                                    <option value="">Choose 1 or more</option>
                                    {
                                        genres && genres.map(g => (
                                            <option key={g.id} value={g.name}>{g.name}</option>
                                        ))
                                    }
                                </select>

                                {
                                    input.genres.map((el, index) =>
                                        <div key={index} className={s.divMultiSelect}>
                                            <p className={s.multiSelect}>{el}</p>
                                            <button className={s.btnMultiSelect} onClick={() => {handleDeleteGenres(el)}}>X</button>
                                        </div>
                                    )
                                }

                            </div>

                        </div>
                    </div>

                    <button className={s.btn} type="submit">Create Videogame</button>

                </form>



            </div>
        </div>
    )

}

//Si quiero usar checkbox:
{/* <div>
    <label>Genres:</label>
    {
        genres && genres.map(g => (
            <div key={g.id}>
                <label>
                    <input
                        type="checkbox"
                        value={g.name}
                        name= "genre"
                        onChange={(e) => handleCheckGenres(e)}
                    />{g.name}
                </label>
            </div>
        ))
    }
</div> */}

//Para agregarlo al estado cada vez que se selecciona/desselecciona mediante checkbox:
// function handleCheckGenres(e) {
//     if(e.target.checked) {
//         setInput({
//             ...input,
//             genres: [...input.genres, e.target.value]
//         });
//     } else {
//         setInput({
//             ...input,
//             genres: input.genres.filter(g => g !== e.target.value)
//         })
//     }
// }