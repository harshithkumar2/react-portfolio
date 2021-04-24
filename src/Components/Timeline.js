import React from "react";
import Container from "@material-ui/core/Container";
import { Progress } from "antd";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import "./TImeline.css";
import { Card } from "@material-ui/core";

// initialization
AOS.init();

function Timeline() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="card" id="skill">
              <br />
              <h3>FRONT END TECHNOLOGY</h3>
              <br />
              <div
                className="prog"
                data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#F5DA81",
                    "100%": "#58FAD0",
                  }}
                  percent={80}
                  status="active"
                  format={() => <h4>HTML5</h4>}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#F5DA81",
                    "100%": "#58FAD0",
                  }}
                  percent={60}
                  status="active"
                  format={() => <h4>CSS3</h4>}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#F5DA81",
                    "100%": "#58FAD0",
                  }}
                  percent={85}
                  status="active"
                  format={() => <h4>Bootstrap</h4>}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#F5DA81",
                    "100%": "#58FAD0",
                  }}
                  percent={50}
                  status="active"
                  format={() => <h4>React</h4>}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card className="card" id="skill">
              <br />
              <h3>BACK END LANGUAGE</h3>
              <br />
              <div
                className="prog"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={50}
                  status="active"
                  format={() => <h4>Python</h4>}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={20}
                  status="active"
                  format={() => <h4>C++</h4>}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={30}
                  status="active"
                  format={() => <h4>Php</h4>}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card className="card" id="skill">
              <br />
              <h3>BACK END FRAMEWORK</h3>
              <br />
              <div
                className="prog"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000"
              >
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={70}
                  status="active"
                  format={() => <h4>Flask</h4>}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={65}
                  status="active"
                  format={() => <h4>Django</h4>}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={60}
                  status="active"
                  format={() => <h4>Django</h4>}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card className="card" id="skill">
              <br />
              <h3>Databases and Others.</h3>
              <br />
              <div className="prog" data-aos="fade-up" data-aos-duration="3000">
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#B40431",
                    "100%": "#87d068",
                  }}
                  percent={70}
                  status="active"
                  format={() => <h4>MySQL</h4>}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#B40431",
                    "100%": "#87d068",
                  }}
                  percent={75}
                  status="active"
                  format={() => <h4>Git</h4>}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#B40431",
                    "100%": "#87d068",
                  }}
                  percent={70}
                  status="active"
                  format={() => <h4>Github</h4>}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#B40431",
                    "100%": "#87d068",
                  }}
                  percent={70}
                  status="active"
                  format={() => <h4>Github</h4>}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Timeline;
