"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "@/components/NavbarEffectButton/Button";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "@/components/NavbarEffectButton/Nav/index";

const page = () => {
  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: {
      width: 380,
      height: 550,
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] },
    },
    closed: {
      width: 100,
      height: 40,
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, ease: [0.83, 0, 0.17, 1] },
    },
  };

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default page;
