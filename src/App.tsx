import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routing";
import { Spinner } from "./uiComponents/spinner/spinner";
import { SnackBar } from "./sharedComponents/snackBar/snackBar";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Spinner />
      <SnackBar />
    </>
  );
}

export default App;
