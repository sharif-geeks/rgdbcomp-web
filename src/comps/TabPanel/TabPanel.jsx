export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      style={{ flex: 1, overflow: "hidden", overflowY: "scroll" }}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
