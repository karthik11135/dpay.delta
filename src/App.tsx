import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import StallsPage from "./components/stalls/StallsPage";

import Payment from "./components/payments/Payment";
import PayingPage from "./components/payments/PayingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stalls" element={<StallsPage />}></Route>
        <Route path="/transactions" element={<Home />}></Route>
        <Route path="/more" element={<Home />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/paying/:id" element={<PayingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
