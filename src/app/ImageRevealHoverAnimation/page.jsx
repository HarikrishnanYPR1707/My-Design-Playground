/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import style from "./styles.module.css";
import { motion } from "framer-motion";

const page = () => {
  const [isHovered, setIsHovered] = useState(false);

  const size = isHovered ? 2100 : 0;

  return (
    <div
      className={style.main}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text Container */}
      <div className={style.textContainer}>
        <p>Hover To Reveal</p>
      </div>
      {/* Image Container */}
      <motion.div
        className={style.imageContainer}
        animate={{
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          duration: 1.8,
          ease: [0.83, 0, 0.17, 1],
        }}
      />
    </div>
  );
};

export default page;
