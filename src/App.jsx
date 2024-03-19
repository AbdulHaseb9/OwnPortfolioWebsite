import { Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
