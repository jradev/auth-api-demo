import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../container/home";
import Login from "../container/login";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}