import logo from "./logo.svg";
import "./App.css";
import Drawer from "./components/sidedrawer/sidedrawer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/appbar/appbar";
function App() {
  return (
    <div className="App">
      <Drawer />
      {/* <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
