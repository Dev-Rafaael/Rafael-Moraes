import "./Projects.css";

function Projects({ modoEscuro }) {
  return (
    <section
      className={modoEscuro ? "sectionProjetos" : "sectionProjetosWhite"}
      id="projeto"
    >
      <div
        className={modoEscuro ? "titleProjetos" : "titleProjetosWhite"}
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <h2>Projetos</h2>
      </div>
      <div
        className={modoEscuro ? "subtitle" : "subtitleWhite"}
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <p>Uma seleção dos meus melhores trabalhos e projetos recentes</p>
      </div>
      <article
        className={modoEscuro ? "contentProjetos" : "contentProjetosWhite"}
      > <div
          className={modoEscuro ? "card" : "cardWhite"}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <article
            className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}
          >
            <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
              <img
                src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765456502/gettyimages-1366800010-640x640_fhqukv.jpg"
                className="imagem"
                alt="Projeto em desenvolvimento"
              />

              <button disabled className="btnDisabled">
                Em Desenvolvimento
              </button>
            </div>
          </article>

          <article className={modoEscuro ? "projeto" : "projetoWhite"}>
            <h5>Novo Sistema – Em Desenvolvimento</h5>
            <p>
              Projeto em construção trazendo novas funcionalidades, melhorias de
              performance e interface totalmente modernizada.
            </p>

            <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
              <li>
                <img
                  src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765456569/icons8-ponto-de-interroga%C3%A7%C3%A3o-96_c6hqj0.png"
                  alt="????"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765456569/icons8-ponto-de-interroga%C3%A7%C3%A3o-96_c6hqj0.png"
                  alt="????"
                />
              </li>{" "}
              <li>
                <img
                  src="https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765456569/icons8-ponto-de-interroga%C3%A7%C3%A3o-96_c6hqj0.png"
                  alt="????"
                />
              </li> 
            </ul>
          </article>
        </div>
        {/* Card Projeto */}
        <div
          className={modoEscuro ? "card" : "cardWhite"}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <article
            className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}
          >
            <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199819/Captura_de_Tela_165_ezinds.png"
                }
                className="imagem"
                alt="Imagem E-Commerce"
              />
              <button>
                <a
                  href="https://la-pizza-monorepo-front-end.vercel.app"
                  target="_blank"
                >
                  Ver Projeto
                </a>
              </button>
            </div>
          </article>
          <article className={modoEscuro ? "projeto" : "projetoWhite"}>
            <h5>La Pizza – E-commerce</h5>
            <p>
              E-commerce da pizzaria La Pizza, com cardápio online, pedidos
              personalizados e dashboard de gestão de vendas.
            </p>
            <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200126/html_ktpien.png"
                  }
                  alt="La Pizza Imagem"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199957/css_wdrfsp.png"
                  }
                  alt="CSS"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200187/javascript_nbwfe1.png"
                  }
                  alt="JavaScript"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200106/react_ejm60z.png"
                  }
                  alt="React"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199984/typescript_qvdtda.png"
                  }
                  alt="TypesScript"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200025/node_i7wjfa.png"
                  }
                  alt="Node"
                />
              </li>{" "}
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199925/express_fp1g2i.png"
                  }
                  alt="Express"
                />
              </li>{" "}
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200915/prisma-orm_pbkjo6.png"
                  }
                  alt="Prisma ORM"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199892/Postgresql_elephant.svg_nbq4s3.png"
                  }
                  alt="PostgreSql"
                />
              </li>{" "}
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199889/fca49300-e7f1-11ea-9f51-cfd949b31560_ayilys.png"
                  }
                  alt="Zustand"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/zod_uz54r5.png"
                  }
                  alt="Zod"
                />
              </li>{" "}
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/vitest-logo-png_seeklogo-434979_muaids.png"
                  }
                  alt="Vitest"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765201931/icons8-listra-24_jszq6c.png"
                  }
                  alt="Stripe"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/vite_f5mm9w.png"
                  }
                  alt="Vite"
                />
              </li>
            </ul>
          </article>
        </div>

        {/* Card Projeto */}
        <div
          className={modoEscuro ? "card" : "cardWhite"}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <article
            className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}
          >
            <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199818/Captura_de_Tela_166_pp6b3i.png"
                }
                className="imagem"
                alt="DashBoard Image"
              />
              <button>
                <a
                  href="https://la-pizza-monorepo-dashboard.vercel.app/"
                  target="_blank"
                >
                  Ver Projeto
                </a>
              </button>
            </div>
          </article>
          <article className={modoEscuro ? "projeto" : "projetoWhite"}>
            <h5>La Pizza – Dashboard Administrativo</h5>
            <p>
              Dashboard para gestão da pizzaria Lá Pizza, com controle de
              pedidos, clientes e vendas em tempo real.
            </p>
            <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200126/html_ktpien.png"
                  }
                  alt="HTML"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199957/css_wdrfsp.png"
                  }
                  alt="CSS"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200187/javascript_nbwfe1.png"
                  }
                  alt="JavaScript"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200106/react_ejm60z.png"
                  }
                  alt="React"
                />
              </li>{" "}
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199984/typescript_qvdtda.png"
                  }
                  alt="TypesScript"
                />
              </li>{" "}
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200025/node_i7wjfa.png"
                  }
                  alt="Node"
                />
              </li>{" "}
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199925/express_fp1g2i.png"
                  }
                  alt="Express"
                />
              </li>{" "}
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199889/fca49300-e7f1-11ea-9f51-cfd949b31560_ayilys.png"
                  }
                  alt="Zustand"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/zod_uz54r5.png"
                  }
                  alt="Zod"
                />
              </li>{" "}
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/vitest-logo-png_seeklogo-434979_muaids.png"
                  }
                  alt="Vitest"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/vite_f5mm9w.png"
                  }
                  alt="Vite"
                />
              </li>
            </ul>
          </article>
        </div>

        {/* Card Projeto */}
        <div
          className={modoEscuro ? "card" : "cardWhite"}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <article
            className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}
          >
            <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765321797/Captura_de_Tela_173_bynj31.png"
                }
                className="imagem"
                alt="Notebook"
              />
              <button>
                <a href="https://decore-home-six.vercel.app" target="_blank">
                  Ver Projeto
                </a>
              </button>
            </div>
          </article>
          <article className={modoEscuro ? "projeto" : "projetoWhite"}>
            <h5>DecoreHome – Catálogo Decorativo</h5>
            <p>
              Projeto apresentando ambientes decorados, com visual moderno e
              foco em navegação simples para explorar inspirações de design.
            </p>
            <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200126/html_ktpien.png"
                  }
                  alt="Decore Home Image"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199957/css_wdrfsp.png"
                  }
                  alt="CSS"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200187/javascript_nbwfe1.png"
                  }
                  alt="JavaScript"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200106/react_ejm60z.png"
                  }
                  alt="React"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199984/typescript_qvdtda.png"
                  }
                  alt="TypesScript"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200025/node_i7wjfa.png"
                  }
                  alt="Node"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199925/express_fp1g2i.png"
                  }
                  alt="Express"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/zod_uz54r5.png"
                  }
                  alt="Zod"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/vite_f5mm9w.png"
                  }
                  alt="Vite"
                />
              </li>
            </ul>
          </article>
        </div>
        {/* Card Projeto */}
        <div
          className={modoEscuro ? "card" : "cardWhite"}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <article
            className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}
          >
            <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765327561/Captura_de_Tela_174_aeoni5.png"
                }
                className="imagem"
                alt="Notebook"
              />
              <button>
                <a href="https://hdc-host-seven.vercel.app" target="_blank">
                  Ver Projeto
                </a>
              </button>
            </div>
          </article>
          <article className={modoEscuro ? "projeto" : "projetoWhite"}>
            <h5>HDCHost – Plataforma de Hospedagem</h5>
            <p>
              Sistema de hospedagem com painel simples e intuitivo para
              gerenciar sites, domínios e serviços de forma prática.
            </p>
            <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200126/html_ktpien.png"
                  }
                  alt="HDC Host Image"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199957/css_wdrfsp.png"
                  }
                  alt="CSS"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200187/javascript_nbwfe1.png"
                  }
                  alt="JavaScript"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200106/react_ejm60z.png"
                  }
                  alt="React"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199984/typescript_qvdtda.png"
                  }
                  alt="TypesScript"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200025/node_i7wjfa.png"
                  }
                  alt="Node"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199925/express_fp1g2i.png"
                  }
                  alt="Express"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/zod_uz54r5.png"
                  }
                  alt="Zod"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/vite_f5mm9w.png"
                  }
                  alt="Vite"
                />
              </li>
            </ul>
          </article>
        </div>
        <div
          className={modoEscuro ? "card" : "cardWhite"}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <article
            className={modoEscuro ? "cardResponsivo" : "cardResponsivoWhite"}
          >
            <div className={modoEscuro ? "imagensCard" : "imagensCardWhite"}>
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765455736/Captura_de_Tela_178_negczx.png"
                }
                className="imagem"
                alt="Constrularis"
              />
              <button>
                <a href="https://constrularis.vercel.app" target="_blank">
                  Ver Projeto
                </a>
              </button>
            </div>
          </article>
          <article className={modoEscuro ? "projeto" : "projetoWhite"}>
            <h5>Constrularis – Catálogo de Materiais de Construção</h5>
            <p>
              Página moderna para apresentar produtos da construção civil com
              clareza e fácil navegação.
            </p>

            <ul className={modoEscuro ? "tecUsadas" : "tecUsadasWhite"}>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200126/html_ktpien.png"
                  }
                  alt="HDC Host Image"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199957/css_wdrfsp.png"
                  }
                  alt="CSS"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200187/javascript_nbwfe1.png"
                  }
                  alt="JavaScript"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200106/react_ejm60z.png"
                  }
                  alt="React"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199984/typescript_qvdtda.png"
                  }
                  alt="TypesScript"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200025/node_i7wjfa.png"
                  }
                  alt="Node"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199925/express_fp1g2i.png"
                  }
                  alt="Express"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/zod_uz54r5.png"
                  }
                  alt="Zod"
                />
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/vite_f5mm9w.png"
                  }
                  alt="Vite"
                />
              </li>
            </ul>
          </article>
        </div>
       
      </article>
    </section>
  );
}

export default Projects;
