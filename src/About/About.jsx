import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutImg from "../assets/about-me.png";
import styles from "./style.module.css";

function About() {
  return (
    <div
      id="About"
      className={`d-flex justify-content-center align-items-center vh-100 ${styles.container}`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-md-6 ${styles.imageContainer}`}>
            <img
              src={aboutImg}
              alt="About Me"
              className={`img-fluid rounded ${styles.image}`}
            />
          </div>
          <div className="col-md-6">
            <div className={styles.textContainer}>
              <h3 className={styles.title}>About Me</h3>
              <p className={`${styles.text} ${styles.highlight}`}>
                "I'm John Charles Omagap, a beginner full-stack developer
                passionate about creating exceptional web experiences. I'm
                currently developing my skills with React, PHP, and SQL while
                also advancing my knowledge of HTML, CSS, and Javascript.
                Outside of coding, I enjoy the creative challenges of drawing
                and playing guitar. I'm actively seeking opportunities to learn
                and contribute to impactful projects.""
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
