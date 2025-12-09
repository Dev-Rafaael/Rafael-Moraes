import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import { ToastContainer } from "react-toastify";
// vídeos vindos da pasta PUBLIC (porque são acessados por "/videos/...")
// Se quiser colocar no src/assets me avisa que ajusto tudo pra você.

function App() {
  const [modoEscuro, setModoEscuro] = useState(true);
  const videoRef = useRef(null);

  // Função única para alternar tema
  const toggleTema = () => {
    setModoEscuro((prev) => !prev);
  };

  // AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Recarrega o vídeo ao mudar o tema
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [modoEscuro]);

  const Home = () =>
    document
      .querySelector("#infoPessoal")
      ?.scrollIntoView({ behavior: "smooth" });

  const sobreMim = () =>
    document.querySelector("#sobreMim")?.scrollIntoView({ behavior: "smooth" });

  const projetos = () =>
    document.querySelector("#projeto")?.scrollIntoView({ behavior: "smooth" });

  const tecnologias = () =>
    document
      .querySelector("#tecnologia")
      ?.scrollIntoView({ behavior: "smooth" });

  const contato = () =>
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
    <ToastContainer/>
      <main className={modoEscuro ? "videoSection" : "videoSectionWhite"}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
        >
          <source
            src={
              modoEscuro
                ? "https://res.cloudinary.com/dwi9yz8wj/video/upload/v1765200339/VideoBackground_crbnwx.mp4"
                : "https://res.cloudinary.com/dwi9yz8wj/video/upload/v1765200342/videoBackgroundWhite_g81xuj.mp4"
            }
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>

        <div
          className={modoEscuro ? "overlayGradient" : "overlayGradientWhite"}
        ></div>

        <section className={modoEscuro ? "contentMain" : "contentMainWhite"}>
          <Navbar
            modoEscuro={modoEscuro}
            toggleTema={toggleTema}
            Home={Home}
            sobreMim={sobreMim}
            projetos={projetos}
            tecnologias={tecnologias}
            contato={contato}
          />

          <Hero modoEscuro={modoEscuro} sobreMim={sobreMim} />
          <About modoEscuro={modoEscuro} />
          <Projects modoEscuro={modoEscuro} />
          <Skills modoEscuro={modoEscuro} />
          <Contact modoEscuro={modoEscuro} />
        </section>
      </main>
    </>
  );
}

export default App;
