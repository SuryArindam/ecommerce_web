import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./spinner.module.css";
import { useAppStore } from "../../appStore/app.store";

export const Spinner: React.FC = () => {
  const { spinner } = useAppStore();

  if (!spinner) {
    return null;
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Backdrop open={true} className={classes.backDrop}>
        <CircularProgress color="info" size={"5rem"} />
      </Backdrop>
    </Box>
  );
};
