"use client";
import Character from "./component/character";
import Paragraph from "./component/paragraph";
import Word from "./component/word";
import styles from "./page.module.scss";

const page = () => {
  const paragraph =
    "The vibrant sunset painted the sky with hues of orange and pink, casting a warm glow over the tranquil landscape.";

  return (
    <main className={styles.container}>
      <div style={{ height: "100vh" }}></div>
      <Paragraph value={paragraph} />
      <div style={{ height: "100vh" }}></div>
      <Word value={paragraph} />
      <div style={{ height: "100vh" }}></div>
      <Character value={paragraph} />
      <div style={{ height: "100vh" }}></div>
    </main>
  );
};

export default page;
