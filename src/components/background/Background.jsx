import '../background/background.css'
import skill from '../../assets/img/creative.png'
import mobile from '../../assets/img/creative_mobile.png'
import { useState } from 'react';
import { useEffect } from 'react';

const Background = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleWindowSizeChange = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth >= 320 && screenWidth <= 768);
    };

    useEffect(() => {
        // Agregar el event listener al cargar el componente
        window.addEventListener('resize', handleWindowSizeChange);

        // Remover el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    return (
        <div id="background-container">
            <div className="container-saas">
                <div className="stop">
                    <div id="wave"></div>
                    <div id="in-wave"></div>
                    <div id="in-solid">
                        <img src={isMobile?mobile:skill} alt="skills" />
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