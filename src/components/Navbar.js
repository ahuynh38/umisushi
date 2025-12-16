import './Navbar.css';
import TakeoutMenu from '../res/takeout-menu.pdf'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-items">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><div className="menu-dropdown-trigger">Menu
                            <div class="menu-dropdown">
                                <a href={TakeoutMenu} target="_blank" rel="noreferrer">Takeout</a>
                                <a href="/dine-in-menu">Dine In</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="tel:+351289153829">Call Us</a></li>
                    <li><a href="./#location">Location</a></li>
                    <li><div className="language-dropdown-trigger">en &#9660;
                            <div class="language-dropdown">
                                <a href="#">EN</a>
                                <a href="#">PT</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;