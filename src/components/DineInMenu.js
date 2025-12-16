import "./DineInMenu.css";
import Navbar from './Navbar'
import React from "react";
import { useTranslation } from 'react-i18next';

import menuEn from "../data/menu-en.json";
import menuPt from "../data/menu-pt-PT.json";

const DineInMenu = () => {

  const { t, i18n } = useTranslation();

  const menuData = i18n.language === 'pt-PT' ? menuPt : menuEn;

  return (
    <div className="menu-container">
        <Navbar />
        <h1>Umi Sushi - {t('dine-in')}</h1>
        {menuData.map((section, idx) => (
          <div key={idx} className="menu-section">
            <h2>{section.section}</h2>
            {section.items.map((item, i) => (
              <div key={i} className="menu-item">
                <div className="item-name">{item.name}</div>
                {item.description && <div className="item-desc">{item.description}</div>}
                <div className="item-price">{item.price}</div>
              </div>
            ))}
            {section.note && <p className="section-note">{section.note}</p>}
          </div>
        ))}
    </div>
  );
};

export default DineInMenu;
