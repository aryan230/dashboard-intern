import logo from "./logo.svg";
import "./App.css";
import Drawer from "./components/sidedrawer/sidedrawer";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Drawer />
    </div>
  );
}

export default App;
