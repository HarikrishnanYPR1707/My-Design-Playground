"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "@/components/NavbarEffectButton/Button";
import { motion } from "framer-motion";

const page = () => {
  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: {
      width: 380,
      height: 550,
      top: "-25px",
      right: "-25px",
    },
    closed: {
      width: 100,
      height: 40,
      top: "0px",
      right: "0px",
    },
  };

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      ></motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default page;
