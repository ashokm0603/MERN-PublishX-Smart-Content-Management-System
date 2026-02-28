import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddPost from "./pages/AddPost";
import ViewPost from "./pages/ViewPost";
import UpdatePost from "./pages/UpdatePost";
import AdminDashboard from "./pages/AdminDashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingPage/>} />
          <Route path="signin" element={<LoginPage/>}/>
          <Route path="signup" element={<RegisterPage/>}/>
          <Route path="add-post" element={<AddPost/>}/>
          <Route path="view-posts" element={<ViewPost/>}/>
          <Route path="update-posts" element={<UpdatePost/>}/>
          <Route path="admin-dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
