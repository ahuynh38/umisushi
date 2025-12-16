import './Navbar.css';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const currentLang = i18n.language?.split('-')[0];

    return (
        <nav className="navbar">
            <div className="navbar-items">
                <ul className="nav-links">
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
                    <li><div className="language-dropdown-trigger">en &#9660;
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