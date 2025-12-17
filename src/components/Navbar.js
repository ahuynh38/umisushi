import './Navbar.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import home_logo from '../res/only_writing.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false); // for hamburger menu logic

    const menuRef = useRef(null); // for hamburger menu logic
    const hamburgerRef = useRef(null); // for hamburger menu logic

    const currentLang = i18n.language?.split('-')[0];

    // Close hamburger menu when clicking outside or on the icon (mobile)
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

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-items">
                <button
                    ref={hamburgerRef}
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
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
                    <li className="menu-item" id="navbar-home">
                        <Link 
                            onClick={() => {
                                setMenuOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            to="/"
                        >
                            {t('home')}
                        </Link>
                    </li>
                    <li className="menu-item menu-dropdown-trigger-container"><div className="menu-dropdown-trigger">{t('menu')}
                            <div className="menu-dropdown">
                                <a href="/takeout-menu.pdf">{t('takeout')}</a>
                                <Link to="/dine-in-menu">{t('dine-in')}</Link>
                            </div>
                        </div>
                    </li>
                    
                    {/* MOBILE ONLY */}
                    <li className="mobile-menu-item menu-item" id="mobile-takeout-container">
                        <a id="mobile-takeout" href="/takeout-menu.pdf">{t('takeout-menu')}</a>
                    </li>
                    <li className="mobile-menu-item menu-item" id="mobile-dine-in-container">
                        <Link id="mobile-dine-in" to="/dine-in-menu">{t('dine-in-menu')}</Link>
                    </li>
                    {/* END MOBILE ONLY */}

                    <li className="menu-item" id="navbar-contact-us-container"><a href="tel:+351289153829">{t('call-us')}</a></li>
                    <li className="menu-item" id="navbar-location-container">
                        <Link 
                            onClick={() => {
                                setMenuOpen(false);
                                requestAnimationFrame(() => {
                                    const el = document.getElementById('location');
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth' });
                                    }
                                });
                            }}
                            to="/"
                        >
                            {t('location')}
                        </Link>
                    </li>
                    <li className="menu-item">
                        <div className="language-dropdown-trigger">{currentLang.toUpperCase()} &#9660;
                            <div className="language-dropdown">
                                <button
                                    type="button"
                                    onClick={() => {
                                        i18n.changeLanguage('en');
                                        setMenuOpen(false);
                                    }}
                                >
                                    EN
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        i18n.changeLanguage('pt-PT');
                                        setMenuOpen(false);
                                    }}
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