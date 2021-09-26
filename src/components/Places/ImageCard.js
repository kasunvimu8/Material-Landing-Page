import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Collapse } from "@material-ui/core";

import useStyles from "./style";

export default function ImageCard({ place, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} timeout={1000}>
      <Card className={classes.cardRoot}>
        <CardMedia
          component="img"
          height="440"
          image={place.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom component="div" className={classes.title}>
            {place.title}
          </Typography>
          <Typography variant="body2" className={classes.text}>
            {place.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}
