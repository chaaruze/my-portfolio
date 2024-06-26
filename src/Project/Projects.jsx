import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectImg from "../assets/project-1.png";
import projectImg2 from "../assets/project-1 (2).png";
import projectImg3 from "../assets/project-1 (3).png";
import styles from "./style.module.css";

function Projects() {
  return (
    <div id="Projects" className={styles.projectsContainer}>
      <div className={styles.topRow}>
        <h3 className={styles.title}>Projects</h3>
      </div>
      <div className={`${styles.carouselWrapper} mt-5`}>
        <h1 className={styles.carouselTextHighlight}>STICA Clinic Records - Current</h1>
        <p className={styles.subtitle}>This system was created to modernize record-keeping by transitioning from paper to digital.</p>
        <Carousel interval={1500}>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img
                className="d-block"
                src={projectImg}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img
                className="d-block"
                src={projectImg2}
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img
                className="d-block"
                src={projectImg3}
                alt="Third slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
