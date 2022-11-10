import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewPost from "./pages/CreatePost";
import { AuthProtected, AdminProtected } from "./utils/privateRoutes";
import BasicExample from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route element={<AuthProtected />}>
          <Route path="/" element={<BasicExample />} />
          <Route element={<AdminProtected />}>
            <Route path="/createPost" element={<NewPost />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
