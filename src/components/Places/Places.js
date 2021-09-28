import React from "react";
import useStyles from "./style";
import ImageCard from "./ImageCard";
import {useWindowPosition} from '../../hooks/useWindowPosition';

const Places = () => {
  const placesToVisit = [
    {
      title: "Negambo",
      description: "Sigiriya is famous for its palace ruins on top of a massive 200 meter high rock surrounded by the remains of an extensive network of gardens, reservoirs and other structures. The rock itself is a lava plug left over from an ancient long extinct volcano.",
      imageUrl: process.env.PUBLIC_URL + "img/image2.png",
      time: 1500,
    },
    {
      title: "Mirissa",
      description: "Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. It is approximately 150 kilometres south of Colombo and is situated at an elevation of 4 metres above sea level. Mirissa's beach and nightlife make it a popular tourist destination",
      imageUrl: process.env.PUBLIC_URL + "img/image1.png",
      time: 1500,
    },
  ];

  const classes = useStyles();
  const animationChecked = useWindowPosition('placesToVisit');
  
  return (
    <div className={classes.root} id="placesToVisit">
        {placesToVisit &&
          placesToVisit.map((place, index) => <ImageCard place={place} key={index} checked={animationChecked}/>)}
    </div>
  );
};

export default Places;


// to complete with compass icon and time line
// images changed and learn more url added