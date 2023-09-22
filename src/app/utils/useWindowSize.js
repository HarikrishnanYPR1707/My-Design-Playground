"use client";
import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize);

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize(getWindowSize);
      // console.log(innerWidth, innerHeight);
    };

    window.addEventListener("resize", handleWindowSize);

    // cleanup function
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [windowSize]);

  return windowSize;
}

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};
