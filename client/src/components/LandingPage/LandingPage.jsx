import React from "react";
import {Link} from "react-router-dom";
import s from "./LandingPage.module.css"

export default function LandingPage() {
    return(
        <div className={s.divLP}>
            <div className={s.divTextBtn}>
                <h1 className={s.text}>WELCOME TO THE <br/>
                VIDEOGAMES APP</h1>
                <Link to = "/home">
                    <button className={s.btn}>PRESS START</button>
                </Link>
            </div>

            {/* <img className={s.img} src="https://thumbs.gfycat.com/CheerfulAntiqueDassie-size_restricted.gif"/>
            <img className={s.img} src="https://thumbs.gfycat.com/HappygoluckyLinearConey-max-1mb.gif"/> */}
            <img className={s.img} src="https://media2.giphy.com/media/KvI1A7ma7Pk48eZ5as/giphy.gif?cid=790b7611b1431f4e9a8d4e8f684b6ad8811aaf555ee5330a&rid=giphy.gif"/>
        </div>
    )
}