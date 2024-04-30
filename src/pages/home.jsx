import { Barra } from "../components/barra";
import { Card } from "../components/card";
import bg from "../assets/img/Subtract.png";
import img from "../assets/img/planta.png";
import img1 from "../assets/img/planta2.png";
import img2 from "../assets/img/planta3.png";
import { Popup } from "../components/popUp";

export const Home = () => {
    const textos = ["Peperonia Plants", "Fiddle-leaf fig", "Calathea Orbifolia"];
    return (
    <>
      <Barra />
      <img src={bg} alt="" />
      <div className="flex pt-10 pb-10 gap-5 justify-center">
        <Card img={img} titulo={textos[0]} />
        <Card img={img1} titulo={textos[1]} />
        <Card img={img2} titulo={textos[2]} />
      </div>
    </>
  );
};

