import React from "react";
import { useSelector } from "react-redux";

import pics from "../../pics";
import Card from "./Card/Card";

import useStyles from "../../styles/PicturesContainerStyle";

function PictureContainer() {
  const classes = useStyles();

  const isCirclesFilter = useSelector(
      (state) => state.filterReducer.form.circle
  );

  const isSquaresFilter = useSelector(
      (state) => state.filterReducer.form.square
  );

  const color = useSelector(
      (state) => state.filterReducer.color
  );

  const brightness = useSelector(
      (state) => state.filterReducer.brightness
  );

  const filteredPics = pics.filter(pic => {
    let isFit = false;
    const isCircle = isCirclesFilter ? pic.form === "circle" : false;
    const isSquare = isSquaresFilter ? pic.form === "square" : false;
    const isFitForm = isCircle || isSquare || (isCircle && isSquare);

    const isRed = color.red ? pic.color === "red" : false;
    const isBlue = color.blue ? pic.color === "blue" : false;
    const isGreen = color.green ? pic.color === "green" : false;
    const isYellow = color.yellow ? pic.color === "yellow" : false;
    const isFitColor = isRed || isBlue || isGreen || isYellow;

    const isAll = !!brightness.all;
    const isDark = brightness.dark ? pic.dark : false;
    const isLight = brightness.light ? !pic.dark : false;
    const isFitBr = isAll || isDark || isLight;

    if (isFitForm && isFitColor && isFitBr) {
      isFit = true;
    }

    return isFit;
  });

  return (
    <div
      className={classes.container}
    >
      {filteredPics.map((pic, index) => (
        <Card
            key={`${pic.form}-${pic.color}-${index}`}
            id={`${pic.form}-${pic.color}-${index}`}
            alt={pic.name}
            src={pic.src}
        />
      ))}
    </div>
  );
}

export default PictureContainer;
