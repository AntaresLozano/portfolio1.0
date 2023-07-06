import  about  from '../../assets/img/download.png'
import logo from '../../assets/img/logosinfondo.png';

import '../about/About.css'
const About = () => {
    return (
        <div className="about-container">
            <div id="about" className="title-container">
                <img src={logo} alt="logo" />
                <p>who I am</p>
                <h2>About my self</h2>
            </div>
            <div className="caracteristics">
                <img src={about} alt="about" />
            </div>
        </div>
    )
}
export default About