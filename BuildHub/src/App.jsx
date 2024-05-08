import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Demo from "./components/Demo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Demo />
    </>
  );
}

export default App;
