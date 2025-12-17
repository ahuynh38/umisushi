import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const currentLang = i18n.language?.split('-')[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-items">
                <button
                    ref={hamburgerRef}
                    className="hamburger"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul ref={menuRef} className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/">{t('home')}</Link></li>
                    <li><div className="menu-dropdown-trigger">{t('menu')}
                            <div className="menu-dropdown">
                                <a href="/takeout-menu.pdf">{t('takeout')}</a>
                                <Link to="/dine-in-menu">{t('dine-in')}</Link>
                            </div>
                        </div>
                    </li>
                    <li><a href="tel:+351289153829">{t('call-us')}</a></li>
                    <li><a href="./#location">{t('location')}</a></li>
                    <li><div className="language-dropdown-trigger">{currentLang.toUpperCase()} &#9660;
                            <div className="language-dropdown">
                                <button
                                    type="button"
                                    onClick={() => i18n.changeLanguage('en')}
                                >
                                    EN
                                </button>
                                <button
                                    type="button"
                                    onClick={() => i18n.changeLanguage('pt-PT')}
                                >
                                    PT
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;