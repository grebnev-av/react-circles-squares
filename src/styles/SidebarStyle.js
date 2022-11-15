import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },

  checkbox: {
    margin: 10,
  },

  resetButton: {
    margin: "0 3% 0 10%",
    padding: "5px 15px",
  },
  "@media screen and (max-width: 600px)": {
    resetButton: {
      padding: "3px 13px",
    },
  },
});

export default useStyles;