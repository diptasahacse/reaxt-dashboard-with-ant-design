import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import ResetPassword from "./Components/Pages/ResetPassword";
import MainLayout from "./Components/MainLayout";
import Dashboard from "./Components/Pages/Dashboard";
import User from "./Components/Pages/User";
import AddUser from "./Components/Pages/AddUser";
import ManageUser from "./Components/Pages/ManageUser";
import AddProduct from "./Components/Pages/AddProduct";
import ManageProducts from "./Components/Pages/ManageProducts";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-user" element={<AddUser/>} />
          <Route path="manage-user" element={<ManageUser/>} />
          <Route path="add-product" element={<AddProduct/>} />
          <Route path="manage-products" element={<ManageProducts/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
