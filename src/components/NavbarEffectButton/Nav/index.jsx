import React from "react";
import styles from "./styles.module.scss";
import { Links, FooterLink } from "./data";
import { motion } from "framer-motion";

const index = () => {
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.65,
        delay: 0.5 + i * 0.1,
        opacity: { duration: 0.35 },
      },
      ease: [0.215, 0.61, 0.355, 1],
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.85 + i * 0.1,
      },
      ease: [0.215, 0.61, 0.355, 1],
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => {
          return (
            <div key={i} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <a href={link.href} className={styles.link}>
                  {link.title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        {FooterLink.map((link, i) => {
          return (
            <motion.a
              href={link.href}
              key={`f_${i}`}
              variants={slideIn}
              custom={i}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              {link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default index;
