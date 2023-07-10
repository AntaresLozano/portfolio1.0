import { useEffect } from 'react';
import logo from '../../assets/img/logosinfondo.png';
import '../navbar/Navbar.css';

const Navbar = () => {
    useEffect(() => {
        const subrayar = (event) => {
            const elementoClickeado = event.target;
            const links = document.querySelectorAll('.links_link');

            links.forEach((link) => {
                if (link !== elementoClickeado) {
                    link.classList.remove('links_link--subrayado');
                }
            });

            elementoClickeado.classList.add('links_link--subrayado');
        };

        const links = document.querySelectorAll('.links_link');
        const homeLink = document.querySelector('.links_link[href="#home"]');

        links.forEach((link) => {
            link.addEventListener('click', subrayar);
        });

        if (homeLink) {
            homeLink.classList.add('links_link--subrayado');
        }

        const downloadcv = document.getElementById('downloadcv');
        downloadcv.addEventListener('click', () => {
            const fileUrl = './assets/cv.pdf';
            const fileName = 'cv.pdf';

            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileName;
            link.click();
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', subrayar);
            });
            downloadcv.removeEventListener('click', () => { });
        };
    }, []);

    return (
        <header>
            <div className="header-container" id='header-container'>
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <p>Antares</p>
                </div>
                <div className="links" id="links">
                    <a className="links_link" href="#home">
                        Home
                    </a>
                    <a className="links_link" href="#about">
                        About
                    </a>
                    <a className="links_link" href="#portfolio-container">
                        Portfolio
                    </a>
                    <a className="links_link" href="#background-container">
                        Background
                    </a>
                </div>
                <div className="dowload-cv">
                    <button id="downloadcv">
                        <span>Download CV</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
