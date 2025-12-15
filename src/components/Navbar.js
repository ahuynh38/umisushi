import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-items">
                <ul className="nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/reservation">Reservation</a></li>
                    <li><a href="/location">Location</a></li>
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