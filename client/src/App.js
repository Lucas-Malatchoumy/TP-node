import "./App.css";
import Login from "./pages/Login";
import Protected from "./utils/privateRoutes";
import BasicExample from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/" element={<BasicExample />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
