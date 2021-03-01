import React, {Fragment} from 'react';
import logo from '../img/logo.png';

const Header = () => {
    return (  
        <Fragment>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-center">
                    <a className="navbar-brand fs-1 fw-bold text-decoration-none text-dark" href="#!">
                    Movies
                    <img src={logo} alt="Movies Logo"  height="80" className="d-inline-block align-top ms-4" />
                    </a>
                </div>
            </nav>
        </Fragment>
    );
}
 
export default Header;