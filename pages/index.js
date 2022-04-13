import Navbar from "./navBar";
import Header from "./header";
import Quiensoy from "./quiensoy";
import Proyectos from "./proyectos";
import Contacto from "./contacto";

import { HelmetProvider } from "react-helmet-async";

export default function Home() {
  return (
    
    <>
    <HelmetProvider>
        <meta charSet="utf-8" />
        <meta property='og:image' content='/images/screen-site.png'/>
        <meta property='og:description' content='Actualmente me encuentro trabajando en el sector energético. Mi objetivo es dedicarme plenamente al desarrollo web. En función de ese objetivo estoy trabajando en diferentes proyectos utilizando el stack MERN (Mongo + Express + React + Node). Estoy en constante aprendizaje realizando cursos e interiorizándome en nuevas tecnologías.'/>
        <meta property='og:url' content='https://arielbidart.vercel.app/'/>
        <meta property="og:title" content="Ariel Bidart - Portfolio"/>
        <title>Ariel Bidart - Portfolio</title>
      </HelmetProvider>
      
      <div className="ancho px-2 md:w1-8/12 md:w2-8/12 mx-auto">
      
        <Navbar />

        <Header />
        

        <Quiensoy />

        <Proyectos />

        <Contacto />
        
      </div>
    </>
  );
}
