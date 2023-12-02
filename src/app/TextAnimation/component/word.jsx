"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "../page.module.scss";

const word = ({ value }) => {
  const word = value.split(" ");

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.3"],
  });

  return (
    <motion.p
      className={styles.paragraph}
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {word.map((word, i) => (
        <span key={i}>{word}</span>
      ))}
    </motion.p>
  );
};

export default word;
