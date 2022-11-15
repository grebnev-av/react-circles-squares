import React from "react";
import {useSelector, useDispatch} from "react-redux";
import CustomCheckbox from "../Base/CustomCheckbox";

import useStyles from "../../styles/SidebarStyle";

function Sidebar() {
    const classes = useStyles();

    const color = useSelector(
        (state) => state.filterReducer.color
    );
    const brightness = useSelector(
        (state) => state.filterReducer.brightness
    );

    const dispatch = useDispatch();

    return (
        <header className={classes.navbar}>
            <div className={classes.checkbox}>
                <CustomCheckbox
                    className={classes.checkbox}
                    name="Red"
                    id="checkbox-red"
                    value={color.red}
                    onChange={(e, value) =>
                        dispatch({type: "APPLY_COLOR_FILTER", value: { red: value } })
                    }
                />
            </div>
            <div className={classes.checkbox}>
                <CustomCheckbox
                    className={classes.checkbox}
                    name="Blue"
                    id="checkbox-blue"
                    value={color.blue}
                    onChange={(e, value) =>
                        dispatch({type: "APPLY_COLOR_FILTER", value: { blue: value } })
                    }
                />
            </div>
            <div className={classes.checkbox}>
                <CustomCheckbox
                    className={classes.checkbox}
                    name="Green"
                    id="checkbox-green"
                    value={color.green}
                    onChange={(e, value) =>
                        dispatch({type: "APPLY_COLOR_FILTER", value: { green: value } })
                    }
                />
            </div>
            <div className={classes.checkbox}>
                <CustomCheckbox
                    className={classes.checkbox}
                    name="Yellow"
                    id="checkbox-yellow"
                    value={color.yellow}
                    onChange={(e, value) =>
                        dispatch({type: "APPLY_COLOR_FILTER", value: { yellow: value } })
                    }
                />
            </div>
            <div className={classes.checkbox}>
                <CustomCheckbox
                    className={classes.checkbox}
                    name="All"
                    id="checkbox-all"
                    value={brightness.all}
                    onChange={(e, value) =>
                        dispatch({type: "APPLY_BRIGHTNESS_FILTER", value: { all: value } })
                    }
                />
            </div>
            <div className={classes.checkbox}>
                <CustomCheckbox
                    className={classes.checkbox}
                    name="Dark"
                    id="checkbox-dark"
                    value={brightness.dark}
                    onChange={(e, value) =>
                        dispatch({type: "APPLY_BRIGHTNESS_FILTER", value: { dark: value } })
                    }
                />
            </div>
            <div className={classes.checkbox}>
                <CustomCheckbox
                    className={classes.checkbox}
                    name="Light"
                    id="checkbox-dark"
                    value={brightness.light}
                    onChange={(e, value) =>
                        dispatch({type: "APPLY_BRIGHTNESS_FILTER", value: { light: value } })
                    }
                />
            </div>
        </header>
    );
}

export default Sidebar;
