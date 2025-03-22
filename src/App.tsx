import "./App.css";
import { TextBox } from "./sharedComponents/textBox/textBox";

function App() {
  return (
    <>
      <div className="App container">
        <TextBox
          id="Surya"
          label="Test"
          onChange={() => {}}
          floatLabel="Hello"
          // value="10"
        />
      </div>
    </>
  );
}

export default App;
