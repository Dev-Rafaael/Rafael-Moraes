
import "./Contact.css";


function Contact({ modoEscuro }) {
  async function enviarFormulario(data) {
  const res = await fetch("backend-portifolio-production-d660.up.railway.app/contato", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return await res.json();
}

  return (
       <section
                  className={modoEscuro ? "sectionContato" : "sectionContatoWhite"}
                  id="contato"
                >
                  <article
                    className={modoEscuro ? "titleContato" : "titleContatoWhite"}
                  >
                    <h2>
                      Vamos <span>Conversar?</span>
                    </h2>
                    <p>
                      Pronto para criar experiências digitais incríveis? Vamos
                      discutir seu projeto e transformar suas ideias em realidade.
                    </p>
                  </article>
                  <div className={modoEscuro ? "contato" : "contatoWhite"}>
                    <article
                      className={
                        modoEscuro ? "formularioContato" : "formularioContatoWhite"
                      }
                    >
                      <div
                        className={modoEscuro ? "contentform" : "contentformWhite"}
                      >
                        <form onSubmit={enviarFormulario}>
                          <div
                            className={
                              modoEscuro ? "titulosForm" : "titulosFormWhite"
                            }
                          >
                            <h2>
                              {" "}
                              💡<span> Conecte-se Comigo</span>
                            </h2>
                            <p>Quanto mais detalhes, melhor posso ajudar você!</p>
                          </div>
                          <div className={modoEscuro ? "campo" : "campoWhite"}>
                            <label htmlFor="">Como Posso te Chamar *</label>
                            <input type="text" placeholder="Digite Seu Nome" />
                          </div>
                          <div className={modoEscuro ? "campo" : "campoWhite"}>
                            <label htmlFor=""> Seu Melhor Email *</label>
                            <input type="email" placeholder="Digite Seu Email" />
                          </div>
                          <div className={modoEscuro ? "campo" : "campoWhite"}>
                            <label htmlFor="">Motivo De contato </label>
                            <select name="motivo" id="motivo" required>
                              <option value="" disabled selected>
                                Selecione um motivo
                              </option>
                              <option value="freelance">
                                Solicitar Projeto Freelance
                              </option>
                              <option value="vaga">
                                Oferta de Vaga de Emprego
                              </option>
                              <option value="duvida">
                                Tirar uma Dúvida Técnica
                              </option>
                              <option value="parceria">Propor Parceria</option>
                              <option value="outro">Outro</option>
                            </select>
                          </div>
                          <div className={modoEscuro ? "campo" : "campoWhite"}>
                            <label htmlFor="Mensagem">
                              {" "}
                              Conte Mais sobre o Motivo De Contato*
                            </label>
                            <textarea name="Mensagem" id="Mensagem"></textarea>
                          </div>
                          <div
                            className={
                              modoEscuro ? "buttonForm" : "buttonFormWhite"
                            }
                          >
                            <button>Enviar Mensagem</button>
                          </div>
                        </form>
                      </div>
                    </article>
                    <section
                      className={
                        modoEscuro ? "contentContato" : "contentContatoWhite"
                      }
                    >
                      <article
                        className={modoEscuro ? "meioContato" : "meioContatoWhite"}
                      >
                        <div
                          className={
                            modoEscuro
                              ? "conteudoApresentacao"
                              : "conteudoApresentacaoWhite"
                          }
                        >
                          <h2>
                            🔗 <span>Outras Formas de Contato </span>{" "}
                          </h2>
                        </div>
                        <ul>
                          <li className="whastsappIcon">
                            <img src={"https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200112/whatsapp_pcfbss.png"} alt="zap" />{" "}
                            <a href="https://wa.me/5511916658824" target="_blank">
                              <p>Whastsapp</p>
                              <span> Para Contato Profissional</span>
                            </a>
                          </li>
    
                          <li className="linkedinIcon">
                            <img src={"https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200006/linkedin_vbwbeb.png"} alt="zap" />{" "}
                            <a
                              href="https://www.linkedin.com/in/rafaaelmoraes/"
                              target="_blank"
                            >
                              <p>linkedin</p>
                              <span>para Conexoes Profissionais</span>
                            </a>
                          </li>
    
                          <li className="gitHubIcon">
                            <img src={"https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765203912/github_pxb1mm.png"} alt="zap" />{" "}
                            <a
                              href="https://github.com/Dev-Rafaael"
                              target="_blank"
                            >
                              <p>Git Hub</p>
                              <span> Para Conhecimento Profissional</span>
                            </a>
                          </li>
                        </ul>
                      </article>
                    </section>
                  </div>
                </section>
  )
}

export default Contact
