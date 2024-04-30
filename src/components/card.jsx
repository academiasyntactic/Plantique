import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Card = ({ img, titulo }) => {
  const [inter, setInter] = useState(false);

  return (
    <>
      <div className="shadow-2xl rounded-lg relative">
        <img src={img} alt="" />
        <h5 className="font-bold text-[1.2rem]">{titulo}</h5>
        <motion.div
          onClick={() => setInter(!inter)}
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -45,
            borderRadius: "100%",
          }}
          className="absolute w-fit top-5 left-5 backdrop-blur-md px-2 rounded-full py-2"
        >
          <svg
            className="w-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill={inter ? "red" : "white"}
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
        </motion.div>
      </div>
    </>
  );
};
