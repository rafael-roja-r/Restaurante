import Logo from "../assets/img/logo/cibertec.svg";


function Footer() {
  return (
    <footer>
      <div className="logo-cibertec">
        <img src={Logo} alt="" />
      </div>
      <div className="separador"></div>
      <div className="info-medio">
        <ul>
          <li>Proyecto Restaurante Kantu</li>
          <li>Curso: Desarrollo De Entornos Web</li>
          <li>Profesor: Jose Luis Pintado Vasquez</li>
          <li>Copyright ©2024 Kantu</li>
          <li>Versión: 0.0.1</li>
        </ul>
      </div>
      <div className="separador"></div>
      <div className="info-integrantes">
        <h3>Integrantes</h3>
        <ul>
          <li>Jose Rafael Rojas Reyna</li>
          <li>Alejandro Alonso Rafael</li>
          <li>Carlos Gabriel Mendoza Cardenas</li>
          <li>Christiams Jefferson Saavedra Canales</li>
          <li>Yoel Rene Castillo Vera</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
