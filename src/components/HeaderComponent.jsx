import { useState } from "react";
import Logo from "../assets/img/logo/kantu.svg";
import shop from "../assets/img/icons/shop.svg";

function Header() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const menuLinks = ["Menu", "Agendar", "Portafolio", "Nosotros"];

  return (
    <header>
      <div className="header-contenedor">
        <div className="header-logo">
          <img src={Logo} alt="Logo de Kantu" />
        </div>
        <div className="header-menu">
          <ul>
            {menuLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={hoveredLink === index ? "hover" : ""}
                >
                  {link}
                </a>
              </li>
            ))}
            <a href="#">
              <img src={shop} alt="" />
            </a>
            <a href="" className="header-unimer">
              Unirme
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

