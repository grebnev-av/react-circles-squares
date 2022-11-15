import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

export default function CustomizedCheckbox(props) {
  return (
    <div>
      <Typography
        gutterBottom
        color="primary"
        id={props.id}
      >
        {props.name}
      </Typography>
      <Checkbox
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
