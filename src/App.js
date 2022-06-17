import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/genre/:genreId/:pageNumber" element={<Home />} />
          <Route path="/search/:query/:pageNumber" element={<Home />} />
          <Route path="/:pageNumber" element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/movie/:movieId/:nav" element={<MovieDetail />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
