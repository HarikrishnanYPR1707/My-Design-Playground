"use client";
import Paragraph from "./component/paragraph";
import styles from "./page.module.scss";

const page = () => {
  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error laboriosam unde tempore itaque, in laudantium consectetur iusto facilis. Aliquam atque, quia porro amet aut fuga!";

  return (
    <main className={styles.container}>
      <div style={{ height: "100vh" }}></div>
      <Paragraph value={paragraph} />
      <div style={{ height: "100vh" }}></div>
    </main>
  );
};

export default page;
