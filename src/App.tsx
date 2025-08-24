import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routing";
import { Spinner } from "./uiComponents/spinner/spinner";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Spinner />
    </>
  );
}

export default App;
