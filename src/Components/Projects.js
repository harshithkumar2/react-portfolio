import React from "react";
import AOS from "aos";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import LazyLoad from "react-lazyload";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Col from "react-bootstrap/Col";
import "aos/dist/aos.css";

// initialization
AOS.init();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    color: "blue",
  },
}));

function Projects(props) {
  const classes = useStyles();
  const pro = props.data;
  return (
    <Col sm={4}>
      <Card
        style={{ margin: "auto", maxWidth: "400px" }}
        className="cards"
        key={pro.name}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="image"
            height="160"
            image={pro.icon}
            title="portfolio"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {pro.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {pro.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {pro.language.map((lang) => {
          return (
            <div
              style={{
                display: "inline-flex",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            >
              <OverlayTrigger
                key={lang.name}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{lang.name}</strong>
                  </Tooltip>
                }
              >
                <Avatar
                  variant="square"
                  className={classes.square}
                  alt={lang.name}
                  src={process.env.PUBLIC_URL + lang.img}
                />
              </OverlayTrigger>
            </div>
          );
        })}

        <CardActions>
          <Link to={`project/explore/${props.id}`}>
            <Button size="small" color="primary" className="Explore">
              Explore
            </Button>
          </Link>
        </CardActions>
      </Card>
      <br />
    </Col>
  );
}

export default Projects;
