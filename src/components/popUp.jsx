import { useEffect } from "react";
import { hoja, imgpopup } from "../assets/img";

export const Popup = ({ setPop }) => {

    useEffect(
        ()=>{
           const mega = async ()=>{
            const response = await fetch("https://api.chucknorris.io/jokes/random")
            const data = await response.json();
            console.log(data.value) 
           }
           mega();
        },[]
    )

  return (
    <div  onClick={() => setPop(false)} className="w-screen h-screen flex items-center justify-center fixed backdrop-blur-md top-0 z-40">
      <div className="w-[45%] flex flex-col gap-3 justify-center items-center bg-white p-10 rounded-2xl">
        <img
          onClick={() => setPop(false)}
          src={hoja}
          className="absolute top-[-40px] left-[20%] w-[20%]"
          alt=""
        />
        <h6 className="text-[#2F7E22] font-extrabold text-2xl">
          Aun no tienes cuenta?
        </h6>
        <input
          type="text"
          className="bg-gray-300 text-gray-500 w-96"
          placeholder="Nombre"
        />
        <input type="text" className="bg-gray-300 w-96" placeholder="Email" />
        <input
          type="text"
          className="bg-gray-300 w-96"
          placeholder="Contraseña"
        />
        <button className="bg-[#2A4F24] px-5 py-2 rounded-md">
          Registrarse
        </button>
        <img className="" src={imgpopup} alt="" />
      </div>
    </div>
  );
};
