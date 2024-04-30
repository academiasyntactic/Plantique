import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Popup } from "./popUp";

export const Barra = () => {

  const [pop, setPop] = useState(false)

  return (
    <div className="fixed gap-3 flex items-center">
      <img src={logo} alt="" />
      <div className="bg-white rounded-2xl px-5 py-2">
        Home
      </div>
      <div onClick={()=>setPop(true)} className="border text-white rounded-2xl px-5 py-2">
        Login
      </div>
      <Link to={'/profile'}>
        Enviar al perfil
      </Link>
      
      { pop && <Popup setPop={setPop} /> }

    </div>
  );
};
