import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/img/logosinfondo.png'
import '../footer/Footer.css'
function Footer() {
    return (
        <div className="footer_container" >
            <div className="footer_space">
                <a className='footer-social-icon' href="https://www.linkedin.com/in/kevin-lozano-8116491b1/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className='footer-social-icon' href="https://www.instagram.com/antaresdev__/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className='footer-social-icon' href="https://api.whatsapp.com/send?phone=573192114380" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>
            <div className="footer_space_logo">
                <a href="#header-container">
                    <img className='footer_logo' src={logo} alt="logo" />
                </a>
                <p>Antares Lozano</p>
            </div>
            <div className="footer_space">
                <button><span>Contact me</span></button>
            </div>
        </div>
    )
}
export default Footer;