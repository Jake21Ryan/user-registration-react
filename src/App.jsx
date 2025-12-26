import { HashRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import SubmitData from "./components/SubmitData";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
