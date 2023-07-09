import '../background/background.css'
import skill from '../../assets/img/creative.png'

const Background = () => {
    return (
        <div id="background-container">
            <div className="container-saas">
                <div className="stop">
                    <div id="wave"></div>
                    <div id="in-wave"></div>
                    <div id="in-solid">
                        <img src={skill} alt="skills" />
                    </div>
                    <div id="hight-light"></div>
                </div>
                <div className="hoverme">
                    <p>hover me!</p>
                </div>
            </div>
        </div>
    )
}

export default Background;