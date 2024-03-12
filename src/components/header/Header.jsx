import logoKasa from "/src/assets/images/logo.png"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
        <img src= {logoKasa} alt="Logo kasa" className="logo" />
        <nav className="navbar">
            <ul>
                <NavLink to={"/"} className={({isActive}) => (isActive ? "active" : "")} >
                <li>Accueil</li>
                </NavLink>
                <NavLink to={"/apropos"} className={({isActive}) => (isActive ? "active" : "")}>
                <li>A Propos</li>
                </NavLink>
                    
            </ul>
        </nav>
      </div>
    );
  };
  
  export default Header;