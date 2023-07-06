import '../proyect/Proyect.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSquareJs, faCss3Alt, faWordpress } from '@fortawesome/free-brands-svg-icons';

const Proyect = ({ img, title, link, languages }) => {
    const iconComponents = {
        'HTML': faHtml5,
        'JS': faSquareJs,
        'CSS': faCss3Alt,
        'WORDPRESS': faWordpress,
    };

    return (
        <div className="proyect">
            <a href={link} target="_blank" rel="noopener noreferrer" ><img src={img} alt={title} /></a>
            <div className="description">
                <h1>{title}</h1>
                {languages &&
                    languages.map((language) => (
                        <span className='language' key={language}>
                            <FontAwesomeIcon icon={iconComponents[language]} />
                        </span>
                    ))}
            </div>
        </div>
    );
};

Proyect.propTypes = {
    // id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired
};

export default Proyect;
