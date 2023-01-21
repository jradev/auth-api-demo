import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from "../container/login";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}