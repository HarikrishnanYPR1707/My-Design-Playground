"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "../page.module.scss";

const paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.3"],
  });

  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => console.log(e));
  // });

  return (
    <motion.p
      className={styles.paragraph}
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  );
};

export default paragraph;
