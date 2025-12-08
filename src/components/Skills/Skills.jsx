import "./Skills.css";

function Skills({ modoEscuro }) {
  return (
    <section
      className={modoEscuro ? "habilidadesContent" : "habilidadesContentWhite"}
    >
      <div
        className={modoEscuro ? "titleTecnologia" : "titleTecnologiaWhite"}
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <h2>
          {" "}
          Tecnologias e <span>Ferramentas</span>
        </h2>
      </div>
      <div
        className={modoEscuro ? "subtitle" : "subtitleWhite"}
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <p> Tecnologias e Ferramentas que domino e utilizo nos meus projetos</p>
      </div>
      <article
        className={
          modoEscuro ? "articleHabilidades" : "articleHabilidadesWhite"
        }
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className={modoEscuro ? "listas" : "listasWhite"}>
          <ul>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200106/react_ejm60z.png"
                }
                alt="React JS"
              />
            </li>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200187/javascript_nbwfe1.png"
                }
                alt="javascript"
              />
            </li>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199984/typescript_qvdtda.png"
                }
                alt="Typescript"
              />
            </li>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200126/html_ktpien.png"
                }
                alt="HTML"
              />
            </li>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199957/css_wdrfsp.png"
                }
                alt="CSS"
              />
            </li>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200025/node_i7wjfa.png"
                }
                alt="Node JS"
              />
            </li>
            <li className="inProgress">
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765203589/Tailwind_CSS_Logo.svg_wvczwk.png"
                }
                alt="Tailwind"
              />
            </li>
          </ul>
          {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam ad exercitationem facilis sit id, earum natus magnam iusto voluptates placeat fugiat voluptatum itaque doloremque totam amet molestias a assumenda.</span> */}
        </div>
        <div className={modoEscuro ? "listas" : "listasWhite"}>
          <ul>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199925/express_fp1g2i.png"
                }
                alt="Express JS"
              />
            </li>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200915/prisma-orm_pbkjo6.png"
                }
                alt="Prisma ORM"
              />
            </li>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199892/Postgresql_elephant.svg_nbq4s3.png"
                }
                alt="PostgreSql"
              />
            </li>
            <li>
              <img
                className="zustandIcon"
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199889/fca49300-e7f1-11ea-9f51-cfd949b31560_ayilys.png"
                }
                alt="Zustand"
              />
            </li>{" "}
            <li>
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/zod_uz54r5.png"
                }
                alt="Zod"
              />
            </li>
            <li>
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199932/git_ele901.png"
                }
                alt="GIT"
              />
            </li>
            <li>
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/25231_ep0cr3.png"
                }
                alt="GITHUB"
              />
            </li>
            <li>
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765199887/vitest-logo-png_seeklogo-434979_muaids.png"
                }
                alt="Vitest"
              />
            </li>
            <li className="inProgress">
              {" "}
              <img
                src={
                  "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765203109/5968705_w7mnbt.png"
                }
                alt="Figma"
              />
            </li>
          </ul>
          {/* <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam ad exercitationem facilis sit id, earum natus magnam iusto voluptates placeat fugiat voluptatum itaque doloremque totam amet molestias a assumenda.</span> */}
        </div>
      </article>
    </section>
  );
}

export default Skills;
