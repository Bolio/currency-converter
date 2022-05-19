import { BrowserRouter, Routes, Route } from "react-router-dom";

import CurrencyConverter from "./pages/CurrencyConverter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CurrencyConverter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
