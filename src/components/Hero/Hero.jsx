import "./Hero.css";
import { TypeAnimation } from "react-type-animation";


function Hero({ modoEscuro, sobreMim }) {
  return (
    <section className="articleVideo">
      <article className="infoPessoal" id="infoPessoal">
        <div className={modoEscuro ? "dadosInfo" : "dadosInfoWhite"}>
          <h4>
            Construo experiências digitais que{" "}
            <span>encantam na interface</span> e funcionam com solidez por trás
            dos bastidores.
          </h4>

          <p>
            <TypeAnimation
              sequence={[
                "Do layout ao banco de dados, transformo ideias em aplicações modernas, rápidas e alinhadas com os objetivos do seu negócio.",
                2000,
                "",
              ]}
              wrapper="p"
              speed={50}
              style={{ fontSize: "1.1rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
        </div>

        <div className="iconInfo">
          <img src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200365/iconPessoal_j8zpmb.gif" alt="gif pessoal" />
        </div>
      </article>

      <p className="arrowDown" onClick={sobreMim}>
        <img
          src={modoEscuro ? "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200161/arrow_dfgk0e.png" : "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200158/arrowBlack_od3qvy.png"}
          alt="seta para baixo"
        />
      </p>
    </section>
  );
}

export default Hero;
