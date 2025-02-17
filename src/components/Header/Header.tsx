import { Link } from "react-router-dom";
import "./Header.scss";

function Header () {

    return (
        <>
        <div className="header">
            <Link to="./" className="header__link">
                <h2>Home</h2>
            </Link>

            <Link to="./about" className="header__link">
                <h2>About</h2>
            </Link>

           <Link to="./work" className="header__link">
            <h2>Projects</h2>
           </Link>
            
        </div>
        </>
    );
}

export default Header;