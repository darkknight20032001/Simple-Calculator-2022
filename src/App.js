import logo from "./logo.svg";
import "./App.css";
import ButtonNumber from "./Components/ButtonNumber";
import { useState } from "react";
function App() {
  const [Toggle, setToggle] = useState(false);
  return (
    <div className={Toggle ? `App-toggle` : `App`}>
      <ButtonNumber Toggle={Toggle} setToggle={setToggle} />
    </div>
  );
}

export default App;
