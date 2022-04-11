import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postVideogames, getGenres } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";

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
        })
    }

    function handleSelectPlatforms(e) {
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
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
            genres: [...input.genres, e.target.value]
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
        <div>
            <Nav/>

            <h1>Crea tu Videojuego</h1>

            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={input.name}
                        name= "name"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={input.description}
                        name= "description"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Released:</label>
                    <input
                        type="date"
                        value={input.released}
                        name= "released"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Rating:</label>
                    <input
                        type="number"
                        value={input.rating}
                        name= "rating"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Platforms:</label>

                    <select onChange={(e) =>{handleSelectPlatforms(e)}}>
                        <option value="">Choose 1 or more platforms</option>
                        {
                            platformsApi && platformsApi.map((p, index) => (
                                <option key={index} value={p}>{p}</option>
                            ))
                        }
                    </select>
                    
                    {
                        input.platforms.map((el, index) => 
                            <div key={index}>
                                <p>{el}</p>
                                <button onClick={() => {handleDeletePlatforms(el)}}>X</button>
                            </div>
                        )
                    }
                </div>

                <div>
                    <label>Image:</label>
                    <input
                        type="text"
                        value={input.image}
                        name= "image"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div>
                    <label>Genres:</label>
                    <select onChange={(e) =>{handleSelectGenres(e)}}>
                        <option value="">Choose 1 or more genres</option>
                        {
                            genres && genres.map(g => (
                                <option key={g.id} value={g.name}>{g.name}</option>
                            ))
                        }
                    </select>

                    {
                        input.genres.map((el, index) => 
                            <div key={index}>
                                <p>{el}</p>
                                <button onClick={() => {handleDeleteGenres(el)}}>X</button>
                            </div>
                        )
                    }
                    

                </div>
                
                <button type="submit">Crear Videojuego</button>
            </form>
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