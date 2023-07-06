import Proyect from "./proyect/Proyect"
import proyects from '../../assets/data/proyects';
import '../portfolio/Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const Portfolio = () => {
    // console.log(proyects)
    return (
        <div className="portfolio-container" id="portfolio-container">
            <FontAwesomeIcon icon={faFire} className="icon" />
            <h1>proyects</h1>
            <div className="container">
                {proyects.map((proyect) => {
                    return <Proyect key={proyect.id} {...proyect} />
                })}
            </div>
        </div>
    )
}


Proyect.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Portfolio