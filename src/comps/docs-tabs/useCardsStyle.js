const { makeStyles } = require("@material-ui/core");

const useCardStyles = makeStyles(() => ({
  root: {
    minWidth: 320,
    maxWidth: 343,
    borderRadius: 20,
    marginRight: 12,
  },
  content: {
    padding: 24,
  },
  brandLogo: {
    border: "2px solid white",
  },
}));

export default useCardStyles