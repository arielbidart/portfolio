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
        <meta property="og:image" content="/images/screen-site.png" />
        <meta
          property="og:description"
          content="Desde que he iniciado mi desempeño en el mundo laboral me he
interesado en la formación continua para darme herramientas laborales y llevar a cabo mis
tareas eficientemente. En función de eso aspiro a seguir formándome
en relación a la programación. Así como también en idiomas, herramienta que me ha sido de suma
utilidad en mi último trabajo, he colaborado con personas de diferentes culturas y han
resaltado mi orientación proactiva y mi capacidad de trabajo en grupo."
        />
        <meta property="og:url" content="https://arielbidart.vercel.app/" />
        <meta property="og:title" content="Ariel Bidart - Portfolio" />
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
