import React from "react";
import homeImg from "../assets/home.png";
import styles from "./style.module.css";

function Home() {
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="Home" className={styles.container}>
      <div className={styles.textColumn}>
        <div>
          <h3 style={{ fontSize: "3rem" }}>
            <span>I'm</span>{" "}
            <span className={styles.nameSpan}>John Charles Omagap</span>
          </h3>
          <p style={{ fontSize: "2rem" }}>
            Beginner Full Stack Developer, <br /> Ready to Learn
          </p>
        </div>
      </div>
      <div className={styles.imageColumn}>
        <img src={homeImg} className={styles.img} alt="Home" />
      </div>
    </div>
  );
}

export default Home;
