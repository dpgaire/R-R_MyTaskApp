import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyTask from "./components/MyTask";
import MyNote from "./components/MyNote";
import Home from "./components/Home";
function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mytask" element={<MyTask />} />
          <Route exact path="/mynote" element={<MyNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
