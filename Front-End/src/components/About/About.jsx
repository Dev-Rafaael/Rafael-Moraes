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
            Sou o <span>Rafael</span>, Desenvolvedor Full Stack focado na
            criação de aplicações web modernas e escaláveis. Trabalho com
            React.js, Node.js e PostgreSQL, desenvolvendo interfaces intuitivas
            e APIs robustas, além de aprofundar meus conhecimentos com a
            integração de IA em projetos.
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
                Me chamo <span>Rafael Moraes</span> e atuo como Desenvolvedor
                Full Stack, com experiência no desenvolvimento de sistemas
                completos, do front-end ao back-end. Utilizo React.js no
                front-end e Node.js com Express, Prisma e PostgreSQL no
                back-end, criando aplicações modernas e bem estruturadas.
              </p>

              <p>
                Aplico boas práticas como validação com Zod, gerenciamento de
                estado com Zustand e testes com Jest e Vitest, garantindo
                qualidade e confiabilidade. Tenho como foco escrever código
                limpo e evoluir constantemente, especialmente com a inserção de
                IA nos projetos.
              </p>

              <p>
                Sou formado em Análise e Desenvolvimento de Sistemas pela
                Anhanguera e sigo me especializando, aprofundando conhecimentos
                em Next.js, AWS e Inteligência Artificial, sempre buscando novos
                desafios e evolução profissional.
              </p>
            </div>
            <div className={modoEscuro ? "btnSobreMim" : "btnSobreMimWhite"}>
              <button>
                {" "}
                <a
                  href="https://docs.google.com/document/d/16rNkqwq6dte8YrJy23Qd3ZWKLIjcLnrqoriCyTDvPQw/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={modoEscuro ? "btnSobreMim" : "btnSobreMimWhite"}
                >
                  Download CV
                </a>
              </button>
            </div>
          </article>
          <img
            src={
              "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199964/completo_tb0v5w.png"
            }
            data-aos="fade-left"
            data-aos-delay="400"
          />
        </article>
      </section>
    </section>
  );
}

export default About;
