import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import Loading from "./pages/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Assessment />} />
        <Route path="/results" element={<Results />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;