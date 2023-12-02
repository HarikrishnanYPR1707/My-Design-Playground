"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "../page.module.scss";

const word = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.3"],
  });

  const words = value.split(" ");
  return (
    <motion.p className={styles.paragraph} ref={element}>
      {words.map((word, i) => (
        <span className={styles.word} key={i}>
          {word}
        </span>
      ))}
    </motion.p>
  );
};

export default word;
