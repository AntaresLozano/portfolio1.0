import './App.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navabar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Background from './components/background/Background';

function App() {

  return (
    <>
      <Navabar />
      <Banner />
      <About />
      <Portfolio />
      <Background />
    </>
  )
}

export default App
