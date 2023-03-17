import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./Pages/Home";
import CategoryMovies from "./Pages/CategoryMovies";

import { routhPath } from "./Constants/Route";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routhPath.home} element={<Home />} />
        <Route path={routhPath.categories} element={<CategoryMovies />} />
        <Route path={routhPath.invalid} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
