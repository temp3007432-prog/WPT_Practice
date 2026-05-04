import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home"
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";

function Launcher() {
  return (
    <div className="container">
      <Link to={"Home"}>Home</Link> {"  |  "}
      <Link to={"About-us"}>About</Link> {"  |  "}
      <Link to={"Contact-us"}>Contact</Link> {"  |  "}
      <Link to={"dashboard"} >Show Dashboard</Link> {"  |  "}
      <hr />
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Home" element={<Home/>} ></Route>
        <Route path="/About-us" element={<About/>} ></Route>
        <Route path="/Contact-us" element={<Contact/>} ></Route>
        <Route path="/dashboard" element={<Dashboard/>} ></Route>
      </Routes>

      <h2>Footer Here</h2>
    </div>
  );
}

export default Launcher;
