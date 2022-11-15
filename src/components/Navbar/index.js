import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomCheckbox from "../Base/CustomCheckbox";

import useStyles from "../../styles/NavbarStyle";

function Navbar() {
  const classes = useStyles();

  const form = useSelector(
    (state) => state.filterReducer.form
  );

  const dispatch = useDispatch();

  return (
    <header className={classes.navbar}>
      <div className={classes.checkbox}>
          <CustomCheckbox
              className={classes.checkbox}
              name="Circles"
              id="circles-checkbox"
              value={form.circle}
              onChange={(e, value) =>
                  dispatch({ type: "APPLY_FORM_FILTER", value: { circle: value } })
              }
          />
      </div>
      <div className={classes.checkbox}>
          <CustomCheckbox
              className={classes.checkbox}
              name="Squares"
              id="squares-checkbox"
              value={form.square}
              onChange={(e, value) =>
                  dispatch({ type: "APPLY_FORM_FILTER", value: { square: value } })
              }
          />
      </div>
    </header>
  );
}

export default Navbar;
