import "./App.css";
import Greet from "./Component/Greet";
import PhotoCard from "./Component/Photos";
import UserData from "./Component/UserData";
import UserManagement from "./Component/UserManagement";
import Users from "./Component/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Posts from "./Component/Posts";
import Comments from "./Component/Comments";
import Albums from "./Component/Albums";
import Todos from "./Component/Todos";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import ProtectedRoutes from "./Component/Auth/ProtectedRoutes";
import PublicRoutes from "./Component/Auth/PublicRoutes";
import NotFound from "./Component/NotFound";
import InputElements from "./Component/Auth/InputElements";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/inputelement" element={<InputElements />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Users />} />

          <Route path="/user-management" element={<UserManagement />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:userId" element={<Posts />} />

          <Route path="/comments/" element={<Comments />} />
          <Route path="/comments/:postId" element={<Comments />} />

          <Route path="/albums/" element={<Albums />} />
          <Route path="/albums/:userId" element={<Albums />} />

          <Route path="/photos" element={<PhotoCard />} />
          <Route path="/photos/:albumId" element={<PhotoCard />} />

          <Route path="/todos/" element={<Todos />} />
          <Route path="/todos/:userId" element={<Todos />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
