
import { useRef } from "react";
import{FaBars, FaTimes} from "react-icons/fa";
import "../styles/main.css";

function Navbar () {
  const navRef = useRef();

  const showNavbar = () =>{
      navRef.current.classlist.toggle("responsive_nav");

  }
return (
  <header>
        <h3>
          LULIZ TESORO URBANO
        </h3>
        <nav ref={navRef}> 
            <a href="/#"> Inicio</a>
            <a href="/#"> Catalogo</a>
            <a href="/#"> Sobre Nosotros</a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn " onClick={showNavbar}>
          <FaBars/>
        </button>
  </header>
);
}
export default Navbar;