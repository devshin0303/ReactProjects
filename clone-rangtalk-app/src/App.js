import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rangtalk from "./routes/Rangtalk";
import Ssamtalk from "./routes/Ssamtalk";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ssamtalk />}></Route>
        <Route path="/rangtalk" element={<Rangtalk />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
