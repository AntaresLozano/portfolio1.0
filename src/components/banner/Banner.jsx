/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../banner/Banner.css'

const Banner = () => {
    return (
        <main>
            <div id="home" className="banner-container">
                <div className="text-container">
                    <p>Hello, I'm</p>
                    <h1>Antares Lozano</h1>
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
