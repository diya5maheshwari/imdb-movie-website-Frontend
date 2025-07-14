
import NavBar from "./Component/NavBar";
import './App.css'
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import MovieList from "./pages/MovieList";
import TopRated from "./pages/TopRated";
import Actor from "./pages/Actor";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <div className="App" >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/actor/:id" element={<Actor />} />
        <Route path="/top-rated" element={<TopRated />} />
      </Routes>
    </div>

  )

}
export default App;