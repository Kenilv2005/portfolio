import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

import charity_img from "../img/Charity-pana.svg";
import labour5 from "../img/labour5.png";
import admin from "../img/admin.png";
import e_comm from "../img/e-comm.png";
import society from "../img/society.png";
import { Link } from "react-router-dom";

export default function Project() {
  const [key, setKey] = useState("all");
  return (
    <>
      <section id="project" className="project">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} className="text-center">
              <h1 className="project-title">Projects</h1>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg={10} className="tabs-col">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-5 justify-content-center"
              >
                <Tab eventKey="all" title="All">
                  <Row className="justify-content-center">
                    <Col lg={4} className="mb-3">
                      <div className="project-card mb-3 rounded-3">
                        <img
                          className="img-fluid project-img"
                          src={charity_img}
                          alt="charity"
                        />
                        <div className="img-overlay">
                          <div className="card-text">
                            <Link
                              className="nav-link"
                              to="https://do-charity.web.app/"
                            >
                              <i className="bi bi-arrow-right-circle"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-content text-center">
                        <p>
                          Charity website using Javascript with Localstorage{" "}
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} className="mb-3">
                      <div className="project-card mb-3 rounded-3">
                        <img
                          className="img-fluid project-img"
                          src={e_comm}
                          alt="charity"
                        />
                        <div className="img-overlay">
                          <div className="card-text">
                            <Link
                              className="nav-link"
                              to="https://e-comm-rjs.web.app/"
                            >
                              <i className="bi bi-arrow-right-circle"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-content text-center">
                        <p>
                          E-commerce website prototype using ReactJS with
                          Localstorage{" "}
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} className="mb-3">
                      <div className="project-card mb-3 rounded-3">
                        <img
                          className="img-fluid project-img"
                          src={society}
                          alt="charity"
                        />
                        <div className="img-overlay">
                          <div className="card-text">
                            <Link
                              className="nav-link"
                              to="https://society-hisab.web.app/"
                            >
                              <i className="bi bi-arrow-right-circle"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-content text-center">
                        <p>
                          Society Maintenance Manage app using ReactJS with
                          Firebase Database{" "}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="javascript" title="Javascript">
                  <Row className="justify-content-center">
                    <Col lg={4} className="mb-3">
                      <div className="project-card mb-3 rounded-3">
                        <img
                          className="img-fluid project-img"
                          src={charity_img}
                          alt="charity"
                        />
                        <div className="img-overlay">
                          <div className="card-text">
                            <Link
                              className="nav-link"
                              to="https://do-charity.web.app/"
                            >
                              <i className="bi bi-arrow-right-circle"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-content text-center">
                        <p>
                          Charity website using Javascript with Localstorage{" "}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="react" title="React">
                  <Row className="justify-content-center">
                    <Col lg={4} className="mb-3">
                      <div className="project-card mb-3 rounded-3">
                        <img
                          className="img-fluid project-img"
                          src={e_comm}
                          alt="charity"
                        />
                        <div className="img-overlay">
                          <div className="card-text">
                            <Link
                              className="nav-link"
                              to="https://e-comm-rjs.web.app/"
                            >
                              <i className="bi bi-arrow-right-circle"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-content text-center">
                        <p>
                          E-commerce website using ReactJS with Localstorage{" "}
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} className="mb-3">
                      <div className="project-card mb-3 rounded-3">
                        <img
                          className="img-fluid project-img"
                          src={society}
                          alt="charity"
                        />
                        <div className="img-overlay">
                          <div className="card-text">
                            <Link
                              className="nav-link"
                              to="https://society-hisab.web.app/"
                            >
                              <i className="bi bi-arrow-right-circle"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-content text-center">
                        <p>
                          Society Maintenance Manage app using ReactJS and
                          Firebase Database{" "}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
