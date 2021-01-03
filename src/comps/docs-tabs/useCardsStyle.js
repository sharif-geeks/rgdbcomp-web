const { makeStyles } = require("@material-ui/core");

const useCardStyles = makeStyles(() => ({
  root: {
    minWidth: 320,
    maxWidth: 343,
    borderRadius: 20,
    marginRight: 12,
    display: "flex",
    flexDirection: "column"
  },
  content: {
    padding: 24,
    flex: 1
  },
  brandLogo: {
    border: "2px solid white",
  },
  body: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 5, /* number of lines to show */
    "-webkit-box-orient": "vertical"
  }
}));

export default useCardStyles