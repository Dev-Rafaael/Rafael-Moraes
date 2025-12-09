import { useState } from "react";
import "./Contact.css";

import { toast } from "react-toastify";
function Contact({ modoEscuro }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensagem, setMensagem] = useState("");

const handleEmail = async (e) => {
    e.preventDefault();

    if (!nome || !email || !motivo || !mensagem) {
        return toast.error("Preencha todos os campos obrigatórios!");
    }

    try {
        const dadosEmail = { nome, email, motivo, mensagem };

        const response = await fetch(
            "https://backend-portifolio-production-d660.up.railway.app/contato",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosEmail),
            }
        );

        if (response.ok) {          
            toast.success("Enviado Com Sucesso!");

            setNome("");
            setEmail("");
            setMotivo("");
            setMensagem("");
        
        } else {
            const errorData = await response.json();
            console.error('Erro de resposta do servidor:', errorData);

            toast.error( "Falha ao enviar mensagem. Tente novamente."); 
        }

    } catch (error) {
        console.error('Erro de rede (catch):', error);
        toast.error("Erro de conexão ou rede. Verifique seu link.");
    } 
};

  return (
    <section
      className={modoEscuro ? "sectionContato" : "sectionContatoWhite"}
      id="contato"
    >
      <article className={modoEscuro ? "titleContato" : "titleContatoWhite"}>
        <h2>
          Vamos <span>Conversar?</span>
        </h2>
        <p>
          Pronto para criar experiências digitais incríveis? Vamos discutir seu
          projeto e transformar suas ideias em realidade.
        </p>
      </article>
      <div className={modoEscuro ? "contato" : "contatoWhite"}>
        <article
          className={
            modoEscuro ? "formularioContato" : "formularioContatoWhite"
          }
        >
          <div className={modoEscuro ? "contentform" : "contentformWhite"}>
            <form onSubmit={handleEmail}>
              <div className={modoEscuro ? "titulosForm" : "titulosFormWhite"}>
                <h2>
                  {" "}
                  💡<span> Conecte-se Comigo</span>
                </h2>
                <p>Quanto mais detalhes, melhor posso ajudar você!</p>
              </div>
              <div className={modoEscuro ? "campo" : "campoWhite"}>
                <label htmlFor="">Como Posso te Chamar *</label>
                <input
                  type="text"
                  placeholder="Digite Seu Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className={modoEscuro ? "campo" : "campoWhite"}>
                <label htmlFor=""> Seu Melhor Email *</label>
                <input
                  type="email"
                  placeholder="Digite Seu Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={modoEscuro ? "campo" : "campoWhite"}>
                <label htmlFor="">Motivo De contato </label>
                <select
                  name="motivo"
                  id="motivo"
                  required
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                >
                  <option value="" disabled selected>
                    Selecione um motivo
                  </option>
                  <option value="freelance">Solicitar Projeto Freelance</option>
                  <option value="vaga">Oferta de Vaga de Emprego</option>
                  <option value="duvida">Tirar uma Dúvida Técnica</option>
                  <option value="parceria">Propor Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className={modoEscuro ? "campo" : "campoWhite"}>
                <label htmlFor="Mensagem">
                  {" "}
                  Conte Mais sobre o Motivo De Contato*
                </label>
                <textarea
                  name="Mensagem"
                  id="Mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                >
                  {" "}
                </textarea>
              </div>
              <div className={modoEscuro ? "buttonForm" : "buttonFormWhite"}>
                <button type="submit">Enviar Mensagem</button>
              </div>
            </form>
          </div>
        </article>
        <section
          className={modoEscuro ? "contentContato" : "contentContatoWhite"}
        >
          <article className={modoEscuro ? "meioContato" : "meioContatoWhite"}>
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
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200112/whatsapp_pcfbss.png"
                  }
                  alt="zap"
                />{" "}
                <a href="https://wa.me/5511916658824" target="_blank">
                  <p>Whastsapp</p>
                  <span> Para Contato Profissional</span>
                </a>
              </li>

              <li className="linkedinIcon">
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765200006/linkedin_vbwbeb.png"
                  }
                  alt="zap"
                />{" "}
                <a
                  href="https://www.linkedin.com/in/rafaaelmoraes/"
                  target="_blank"
                >
                  <p>linkedin</p>
                  <span>para Conexoes Profissionais</span>
                </a>
              </li>

              <li className="gitHubIcon">
                <img
                  src={
                    "https://res.cloudinary.com/dwi9yz8wj/image/upload/v1765203912/github_pxb1mm.png"
                  }
                  alt="zap"
                />{" "}
                <a href="https://github.com/Dev-Rafaael" target="_blank">
                  <p>Git Hub</p>
                  <span> Para Conhecimento Profissional</span>
                </a>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Contact;
