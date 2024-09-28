import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import { MorePage } from "./components/MorePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/stalls' element={<Home />}></Route>
        <Route path='/transactions' element={<Home />}></Route>
        <Route path='/more' element={<MorePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
