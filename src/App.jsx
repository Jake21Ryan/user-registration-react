import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import SubmitData from "./components/SubmitData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/display-data" element={<DisplayData />} />
        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
