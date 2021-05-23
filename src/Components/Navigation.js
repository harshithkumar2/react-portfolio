import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import FilterTiltShiftIcon from "@material-ui/icons/FilterTiltShift";
import ComputerIcon from "@material-ui/icons/Computer";
import "./spinner.css";
const Theme = React.lazy(() => import("./Theme"));

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nodesign: {
    textDecoration: "none",
    color: "black",
  },
  col: {
    color: "white",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.col}>
            HARSHITH KUMAR
          </Typography>
          <div className="theme-btn">
            <Theme />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={0}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/" className={classes.nodesign}>
              <ListItemText primary={"HOME"} />
            </Link>
          </ListItem>
          <br></br>
          <ListItem button key={7}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/myprofile" className={classes.nodesign}>
              <ListItemText primary={"MY PROFILE"} />
            </Link>
          </ListItem>
          <br></br>
          <ListItem button key={18}>
            <ListItemIcon>
              <ComputerIcon />
            </ListItemIcon>
            <Link to="/skills" className={classes.nodesign}>
              <ListItemText primary={"MY SKILLS"} />
            </Link>
          </ListItem>
          <br></br>
          <Divider />
          <br></br>
          <ListItem button key={1}>
            <ListItemIcon>
              <FilterTiltShiftIcon />
            </ListItemIcon>
            <Link to="/project/explore/0" className={classes.nodesign}>
              <ListItemText primary={"COLLEGE-ERP"} />
            </Link>
          </ListItem>
          <br></br>
          <ListItem button key={2}>
            <ListItemIcon>
              <FilterTiltShiftIcon />
            </ListItemIcon>
            <Link to="/project/explore/1" className={classes.nodesign}>
              <ListItemText primary={"VYAPAR"} />
            </Link>
          </ListItem>
          <br></br>
          <ListItem button key={3}>
            <ListItemIcon>
              <FilterTiltShiftIcon />
            </ListItemIcon>
            <Link to="/project/explore/2" className={classes.nodesign}>
              <ListItemText primary={"EASY LIBRARY"} />
            </Link>
          </ListItem>
          <br></br>
          <Divider />
          <br></br>
          <ListItem button key={4}>
            <ListItemIcon>
              <DonutLargeIcon />
            </ListItemIcon>
            <Link to="/project/explore/3" className={classes.nodesign}>
              <ListItemText primary={"POLLING SITE"} />
            </Link>
          </ListItem>
          <br></br>
          <ListItem button key={5}>
            <ListItemIcon>
              <DonutLargeIcon />
            </ListItemIcon>
            <Link to="/project/explore/4" className={classes.nodesign}>
              <ListItemText primary={"USER-DOC"} />
            </Link>
          </ListItem>
          <br></br>
          <ListItem button key={6}>
            <ListItemIcon>
              <DonutLargeIcon />
            </ListItemIcon>
            <Link to="/project/explore/5" className={classes.nodesign}>
              <ListItemText primary={"RENTER-WEB"} />
            </Link>
          </ListItem>
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
