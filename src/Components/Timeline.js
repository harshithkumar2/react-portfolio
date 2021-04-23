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
    <div className="bod">
      <Container>
        <Row>
          <Col>
            <Card className="card">
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
                  format={() => "HTML5"}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#F5DA81",
                    "100%": "#58FAD0",
                  }}
                  percent={60}
                  status="active"
                  format={() => "CSS3"}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#F5DA81",
                    "100%": "#58FAD0",
                  }}
                  percent={85}
                  status="active"
                  format={() => "Bootstrap"}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#F5DA81",
                    "100%": "#58FAD0",
                  }}
                  percent={50}
                  status="active"
                  format={() => "React"}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card className="card">
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
                  format={() => "PYTHON"}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={20}
                  status="active"
                  format={() => "C++"}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={30}
                  status="active"
                  format={() => "PHP"}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card className="card">
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
                  format={() => "FLASK"}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={65}
                  status="active"
                  format={() => "DJANGO"}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={60}
                  status="active"
                  format={() => "JQuery"}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card className="card">
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
                  format={() => "MySQL"}
                />

                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#B40431",
                    "100%": "#87d068",
                  }}
                  percent={75}
                  status="active"
                  format={() => "Git"}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#B40431",
                    "100%": "#87d068",
                  }}
                  percent={70}
                  status="active"
                  format={() => "Github"}
                />
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#B40431",
                    "100%": "#87d068",
                  }}
                  percent={70}
                  status="active"
                  format={() => "Heroku"}
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
