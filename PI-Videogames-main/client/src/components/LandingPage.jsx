import React from "react";
import {Link} from "react-router-dom";
import s from "./LandingPage.module.css"

export default function LandingPage() {
    return(
        <div className={s.divLP}>
            <h1>Holaaa</h1>
            <Link to = "/home">
                <button>Ingresar</button>
            </Link>
        </div>
    )
}