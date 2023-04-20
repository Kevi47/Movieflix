import "./App.scss";
import Movies from "./Components/Movies/Movies";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
function App() {
  return (
    <Router>
      <div className="Nav1">
        <Link className="Nav2" to="/">
          Home
        </Link>
        <Link className="Nav2" to="/movies">
          Movies
        </Link>
      </div>
      <Routes>
        <Route index element={<Main />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
