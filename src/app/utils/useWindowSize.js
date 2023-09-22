"use client";
import { useState, useEffect } from "react";

const getWindowSize = () => {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return { innerWidth: 1024, innerHeight: 1024 };
};

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
