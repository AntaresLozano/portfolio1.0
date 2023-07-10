/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../banner/Banner.css'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Banner = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Antares Lozano", "Web developer", "Creative","Antares Lozano"],
            stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
            typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
            startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
            backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
            smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
            shuffle: false, // Alterar el orden en el que escribe las palabras.
            backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
            loop: true, // Repetir el array de strings
            loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
            showCursor: true, // Mostrar cursor palpitanto
            cursorChar: '|', // Caracter para el cursor
            contentType: 'html', // 'html' o 'null' para texto sin formato
        })
    })


    return (
        <main>
            <div id="home" className="banner-container">
                <div className="text-container">
                    <p>Hello, I'm</p>
                    <h1 ref={el}></h1>
                    <a id="mail" href="mailto:antaresdevsign@gmail.com?Subject=Me%20interesa%20tu%20perfil">
                        <span>antaresdevsign@gmail.com</span>
                    </a>
                    <div className="redes">
                        <a href="https://www.linkedin.com/in/kevin-lozano-8116491b1/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://www.instagram.com/antaresdev__/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=573192114380" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
                <div className="photo-container">
                    {/* <img src={photo} alt="Antares Lozano" /> */}
                </div>
            </div>
        </main>
    );
};

export default Banner;
