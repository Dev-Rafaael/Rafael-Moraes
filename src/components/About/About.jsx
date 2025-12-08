import "./About.css";

function About({ modoEscuro }) {
  return (
    <section className={modoEscuro ? "content" : "contentWhite"}>
      <section
        className={modoEscuro ? "sobreMim" : "sobreMimWhite"}
        id="sobreMim"
      >
        <div
          className={modoEscuro ? "titleSobreMim" : "titleSobreMimWhite"}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <h2>
            Quem <span>eu sou?</span>{" "}
          </h2>
          <p>
            Sou o <span>Rafael</span> um Desenvolvedor Front-end e Full Stack,
            especializado na criação de interfaces web, desenvolvimento de
            sistemas e aplicações modernas. Trabalho com tecnologias como
            React.js, Laravel (PHP) e MySQL, sempre buscando construir soluções
            dinâmicas, escaláveis e de alta performance.
          </p>
        </div>
        <article className={modoEscuro ? "contentSobre" : "contentSobreWhite"}>
          <article
            className={modoEscuro ? "listaSobre" : "listaSobreWhite"}
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className={modoEscuro ? "listaContent" : "listaContentWhite"}>
              <p>
                Me chamo <span> Rafael Moraes</span>, sou Desenvolvedor Full
                Stack com foco em criar soluções web modernas, escaláveis e de
                alta performance. Trabalho com React.js no front-end e Laravel
                (PHP) com MySQL no back-end, sempre buscando entregar interfaces
                bem construídas e sistemas eficientes.
              </p>
              <p>
                Sou formado em Análise e Desenvolvimento de Sistemas pela
                Anhanguera e pós-graduando em Inteligência Artificial e Ciência
                de Dados pela Anhembi Morumbi. Além disso, mantenho o
                aprendizado constante por meio de cursos voltados ao
                desenvolvimento web.
              </p>
              <p>
                Tenho como prioridade escrever código limpo, aplicar boas
                práticas e garantir a melhor experiência para o usuário. Estou
                sempre em busca de evolução e de novos desafios que me façam
                crescer como profissional e como pessoa.
              </p>
            </div>
            <div className={modoEscuro ? "btnSobreMim" : "btnSobreMimWhite"}>
              <button>
                <a href="#contato">Dowload CV</a>
              </button>
            </div>
          </article>
          <img src={"https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199964/completo_tb0v5w.png"} data-aos="fade-left" data-aos-delay="400" />
        </article>
      </section>
    </section>
  );
}

export default About;
