import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img01 from "../img/hero-img.2.webp";
import TabButton from "./TabButton";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="abt-img">
              <div className="about-img">
                <img className="img-fluid" src={img01} alt="" />
              </div>
            </Col>
            <Col lg={6} className="abt-text">
              <h1 className="about-title text-light">About Me</h1>
              <p className="about-text text-light">
                Transitioning into web development has ignited a new passion
                within me. While my background differs, I've enthusiastically
                dived into JavaScript, React, Node.js, Express, Firebase, HTML,
                CSS, and Git to master the craft. I thrive on continuous
                learning, eagerly absorbing new skills to enhance my
                capabilities.
              </p>
              <TabButton />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

// I am delving into the world of web development with a newfound passion for
// crafting engaging online experiences. Through self-learning, I've gained proficiency
// in JavaScript, React, Node.js, Express, Firebase, HTML, CSS, and Git. I have a knack
// for picking up new skills swiftly, always eager to broaden my expertise.

// My collaborative nature makes me a great team player—I thrive when working
// alongside others, pooling our strengths to create remarkable web applications.
// I'm enthusiastic about translating ideas into interactive and responsive websites,
// and I'm excited about the prospect of contributing to a dynamic team to bring innovative projects to life.

// I'm new to web development but passionate about creating interactive websites.
// I've picked up JavaScript, React, Node.js, Express, Firebase, HTML, CSS, and Git.
// I love learning and collaborating with teams to build awesome web applications.

// Transitioning into web development has ignited a new passion within me.
// While my background differs, I've enthusiastically dived into JavaScript, React,
// Node.js, Express, Firebase, HTML, CSS, and Git to master the craft. I thrive on
// continuous learning, eagerly absorbing new skills to enhance my capabilities.

// My collaborative spirit shines when working with teams, pooling our strengths
// to craft captivating web applications. I'm driven by the prospect of transforming
// concepts into responsive, interactive websites, and I'm eager to contribute my enthusiasm
// and skills to a dynamic team, fostering innovation and excellence.
