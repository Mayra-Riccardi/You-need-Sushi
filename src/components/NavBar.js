import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 rounded">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={logo} alt="" width="80" height="80" class="d-inline-block align-text-bottom"/>
        You Need Sushi
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Kits</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Arroz</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Algas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Salsas</a>
        </li>
        </ul>
        </div>
        <CartWidget/>
        </div>
        </nav>
    )
}

export default NavBar;