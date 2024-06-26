import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import jsLogo from "../assets/js-logo.png";
import phpLogo from "../assets/php-logo.png";
import xamppLogo from "../assets/xampp-logo.png";
import reactLogo from "../assets/react-logo.png";
import styles from "./style.module.css"; // Import your custom CSS file

function Skillsets() {
  return (
    <div id="Skillsets" className={`container py-5 ${styles.skillsets}`}>
      <div className={styles.topRow}>
        <h3 className={styles.title}>Skillsets</h3>
      </div>
      <Container>
        <Row className="justify-content-center">
          <SkillCard
            logo={htmlLogo}
            title="HTML"
            description="Proficient in creating structured web pages."
          />
          <SkillCard
            logo={cssLogo}
            title="CSS"
            description="Skilled in styling and layout techniques."
          />
          <SkillCard
            logo={jsLogo}
            title="JavaScript"
            description="Experienced in client-side scripting and DOM manipulation."
          />
          <SkillCard
            logo={reactLogo}
            title="React.js"
            description="Expanding expertise in building dynamic user interfaces."
          />
          <SkillCard
            logo={phpLogo}
            title="PHP"
            description="Learning server-side scripting and backend development."
          />
          <SkillCard
            logo={xamppLogo}
            title="XAMPP & SQL"
            description="Acquiring proficiency in local development and database management."
          />
        </Row>
      </Container>
    </div>
  );
}

function SkillCard({ logo, title, description }) {
  return (
    <Col md={2} className="mb-4">
      <Card className="h-100 shadow-sm">
        <div className="text-center mt-4">
          <img
            src={logo}
            alt={`${title} Logo`}
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-center">{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Skillsets;
