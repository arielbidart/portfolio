import Navbar from "./navBar";
import Header from "./header";
import Quiensoy from "./quiensoy";
import Proyectos from "./proyectos";
import Contacto from "./contacto";

export default function Home() {
  return (
    <>
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
