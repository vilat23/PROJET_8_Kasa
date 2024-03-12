import logoKasa from "/src/assets/images/logo.png"

const Header = () => {
    return (
      <div className="header">
        <img src= {logoKasa} alt="Logo kasa" className="logo" />
        <nav className="navbar">
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">A Propos</a></li>
            </ul>
        </nav>
      </div>
    );
  };
  
  export default Header;