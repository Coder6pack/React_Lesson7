import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Constrac from "./pages/Constrac";
import DetailContact from "./pages/DetailContact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/constrac">Contract</Link>
          </li>
          <li>
            <Link to="/detailcontact">DetailContract</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/constrac" element={<Constrac />} />
        <Route path="/constrac/:id" element={<DetailContact />} />
      </Routes>
    </>
  );
}

export default App;
