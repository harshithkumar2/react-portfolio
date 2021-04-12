import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Image from "../bk.jpg";
import User from "../user.jpg";
import Table from "react-bootstrap/Table";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
}));
function Profile(props) {
  const classes = useStyles();
  const data = props.data;
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Image})`,
          height: "370px",
          width: "340px",
          margin: "auto",
        }}
      ></div>
      <div className={classes.root}>
        <Avatar
          style={{ margin: "auto", position: "relative", bottom: "120px" }}
          alt="Remy Sharp"
          src={User}
          className={classes.large}
        />
      </div>
      <div
        style={{
          width: "340px",
          margin: "auto",
        }}
      >
        <Table striped bordered hover size="md">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>D.O.B:</th>
              <td>{data.dob}</td>
            </tr>
            <tr>
              <th>Gender:</th>
              <td>{data.gender}</td>
            </tr>
            <tr>
              <th>Hobbies:</th>
              <td>{data.hobbies}</td>
            </tr>
            <tr>
              <th>Languages:</th>
              <td>{data.languages}</td>
            </tr>
            <tr>
              <th>Skills:</th>
              <td>{data.skills}</td>
            </tr>
            <tr>
              <th>Conact No:</th>
              <td>{data.tel}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{data.email}</td>
            </tr>
          </tbody>
        </Table>
        <Table striped bordered hover size="md">
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            PERSONAL SKILLS
          </p>
          <tbody>
            {props.data.pskills.map((skill) => {
              return (
                <tr key={skill}>
                  <td>{skill}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div
        style={{
          width: "340px",
          margin: "auto",
        }}
      >
        <Table striped bordered hover size="md">
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            ACHIEVEMENTS
          </p>
          <tbody>
            {props.data.achievements.map((skill) => {
              return (
                <tr key={skill}>
                  <td>{skill}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div
        style={{
          width: "340px",
          margin: "auto",
        }}
      >
        <Table striped bordered hover size="md">
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            EXTRACURRICULAR ACTIVITIES
          </p>
          <tbody>
            {props.data.extra.map((skill) => {
              return (
                <tr key={skill}>
                  <td>{skill}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div
        style={{
          width: "340px",
          margin: "auto",
        }}
      >
        <Table hover size="md">
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            SOCIAL MEDIA
          </p>
          <tbody>
            <tr>
              <td>
                <a href={data.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon className={classes.large} />
                </a>
              </td>
              <td>
                <a href={data.github} target="_blank" rel="noreferrer">
                  <GitHubIcon className={classes.large} />
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Profile;
