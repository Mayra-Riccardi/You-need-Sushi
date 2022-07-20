import '../styles/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow-lg-a p-3 mb-5 rounded">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img src={logo} alt="" width="80" height="80" class="d-inline-block align-text-bottom"/>
        You Need Sushi
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Kits</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/2">Arroz</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/3">Algas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/1">Salsas</Link>
        </li>
        </ul>
        </div>
        <CartWidget/>
        </div>
        </nav>
    )
}

export default NavBar;