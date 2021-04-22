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
import LazyLoad from "react-lazyload";

import "aos/dist/aos.css";

// initialization
AOS.init();

function Projects(props) {
  var i = 0;

  return props.data.projects.map((pro) => {
    return (
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        <Card style={{ margin: "auto", maxWidth: "750px" }} key={pro.name}>
          <CardActionArea>
            <LazyLoad>
              <CardMedia
                component="img"
                alt="image"
                height="160"
                image={pro.icon}
                title="portfolio"
              />
            </LazyLoad>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {pro.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {pro.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`project/explore/${i++}`}>
              <Button size="small" color="primary">
                Explore
              </Button>
            </Link>
          </CardActions>
        </Card>
        <br />
      </div>
    );
  });
}

export default Projects;
