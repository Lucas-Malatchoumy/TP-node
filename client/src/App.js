import "./App.css";
import Login from "./pages/Login";
import { AuthProtected, AdminProtected } from "./utils/privateRoutes";
import BasicExample from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<AuthProtected />}>
          <Route path="/" element={<BasicExample />} />
          <Route element={<AdminProtected />}>
            <Route path="/createPost" element={<BasicExample />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
