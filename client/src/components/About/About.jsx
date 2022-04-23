import Nav from "../Nav/Nav"
import s from "./About.module.css"
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';

export default function About() {

    return(
        <div className={s.divGeneral}>
            
            <Nav/>

            <div className={s.divDetail}>

                <h2 className={s.title}>WELCOME TO THE VIDEOGAMES APP</h2>

                <p className={s.text}>
                    Hello👋, my name is Cinthia Ramos, and this time
                    I am pleased to present you my videogames app 🎮 .
                    <br/>
                    <br/>
                    This application provides information on several videogames,
                    has a pagination and also has the functionality to search,
                    filter, order and create video games.
                    <br/>
                    <br/>
                    This application was developed using:
                    Javascript, React, Redux, Node.js, Express, PostgreSQL,
                    Sequalize and pure CSS 👩💻.
                </p>

                <div className={s.divRedes}>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/cinthia-stephany-ramos-suyon/" className={s.redes}>
                        <img className={s.imagenL} src={linkedin} alt="img not found"/>
                        <p className={s.textRedes}>LinkedIn</p>
                    </a>
                    
                    <a target="_blank" rel="noreferrer" href="https://github.com/CinthiaRS24" className={s.redes}>
                        <img className={s.imagenG} src={github} alt="img not found"/>
                        <p className={s.textRedes}>GitHub</p>
                    </a>
                </div>
                
            </div>
        </div>
    )
}