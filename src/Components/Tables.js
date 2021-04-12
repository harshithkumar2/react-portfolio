import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";

export default class Tables extends Component {
  render() {
    const id = this.props.id;
    const names = this.props.data.projects[id];

    return (
      <div>
        <Container>
          <Table striped bordered hover size="md">
            <tbody>
              <tr>
                <th>Project Name:</th>
                <td>{names.name}</td>
              </tr>
              <tr>
                <th>Project Type:</th>
                <td>{names.type}</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td>{names.description}</td>
              </tr>
              <tr>
                <th>Team Size:</th>
                <td>{names.team}</td>
              </tr>
              <tr>
                <th>Role Played:</th>
                <td>{names.role}</td>
              </tr>
              <tr>
                <th>Github Link:</th>
                <td>
                  <a href={names.github} target="_blank" rel="noreferrer">
                    <GitHubIcon />
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
