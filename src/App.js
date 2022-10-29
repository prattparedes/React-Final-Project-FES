import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Recipe from "./pages/Recipe";

function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/:id" element={<Recipe />}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
