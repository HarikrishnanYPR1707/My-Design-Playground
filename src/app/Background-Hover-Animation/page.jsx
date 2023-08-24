/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const page = () => {
  const ref = useRef(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // console.log(`${mousePosition.x} <==> ${mousePosition.y}`);

  return (
    <>
      <section className="h-screen">
        {/* blog container */}
        <motion.div
          ref={ref}
          className="absolute h-[1200px] w-[1200px] rounded-full bg-gradient-to-b from-red-600 to-blue-600"
          style={{
            background:
              "radial-gradient(rgba(236, 78, 57, 0.4), transparent 70%)",
          }}
          animate={{
            x: mousePosition.x - 600,
            y: mousePosition.y - 600,
            rotate: 180,
          }}
          transition={{
            type: "tween",
            ease: "backOut",
            duration: 2.5,
          }}
        ></motion.div>
        {/* blur container */}
        <div className="pointer-events-none grid h-screen place-content-center backdrop-blur-3xl">
          <p className="border-2 border-dashed border-[#ec4e39] px-8 text-[100px] font-black uppercase text-white">
            Background Hover Animation
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
