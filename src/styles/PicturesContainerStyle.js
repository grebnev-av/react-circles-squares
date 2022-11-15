import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr))",
    marginTop: 15,
    "& img": {
      width: 128,
      height: 128,
    },
  },
});

export default useStyles;
