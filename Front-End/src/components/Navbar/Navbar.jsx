import { useState } from "react";
import "./Navbar.css";

function Navbar({
  modoEscuro,
  toggleTema,
  Home,
  sobreMim,
  projetos,
  tecnologias,
  contato,
}) {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleClickLink = (callback) => {
    callback();
    setMenuAberto(false);
  };

  return (
    <nav className={modoEscuro ? "navbar" : "navbarWhite"}>
      
      {/* LOGO */}
      <article className="logo">
        <p>
          <img
            src={
              "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200036/RmBlueSea_ulltjm.png"
            }
            alt="minha Logo"
          />
          Rafael
        </p>
      </article>

      {/* MENU HAMBÚRGUER */}
    <div 
  className={`menu-hamburguer ${menuAberto ? 'ativo' : ''}`} 
  onClick={toggleMenu}
>
  <span className="bar"></span>
  <span className="bar"></span>
  <span className="bar"></span>
</div>

<article 
  className={`${modoEscuro ? "barra" : "barraWhite"} ${menuAberto ? "menu-aberto" : ""}`}
>
  <ul className={modoEscuro ? "listaBarra" : "listaBarraWhite"}>
    <li onClick={() => handleClickLink(Home)}>Home</li>
    <li onClick={() => handleClickLink(sobreMim)}>Sobre Mim</li>
    <li onClick={() => handleClickLink(projetos)}>Projetos</li>
    <li onClick={() => handleClickLink(tecnologias)}>Tecnologias</li>
    <li onClick={() => handleClickLink(contato)}>Contato</li>
  </ul>
</article>


      {/* BOTÃO DO TEMA */}
      <article
        className={modoEscuro ? "estiloBackground" : "estiloBackgroundWhite"}
      >
        <img
          className="icone-tema"
          onClick={toggleTema}
          src={
            modoEscuro
              ? "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199992/sol_ioh5fg.png"
              : "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199998/lua_aclnm2.png"
          }
          alt={modoEscuro ? "Claro" : "Escuro"}
        />
      </article>
    </nav>
  );
}

export default Navbar;
