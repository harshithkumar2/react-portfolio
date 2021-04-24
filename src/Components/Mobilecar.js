import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Container from "@material-ui/core/Container";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 820,
    flexGrow: 1,
    margin: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 330,
    display: "block",
    maxWidth: 820,
    overflow: "hidden",
    width: "100%",
  },
}));

function SwipeableTextMobileStepper(props) {
  const id = props.id;
  //const title = props.data.projects[id].name;
  const images = props.data.projects[id].screenshots.images;

  const tutorialSteps = [
    {
      label: "image1",
      imgPath: images[0],
    },
    {
      label: "image2",
      imgPath: images[1],
    },
    {
      label: "image3",
      imgPath: images[2],
    },
    {
      label: "image4",
      imgPath: images[3],
    },
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </Container>
  );
}

export default SwipeableTextMobileStepper;
