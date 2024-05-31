import { Route, Routes } from "react-router-dom";

import "./App.css";
import LandingPageLayout from "./layout/LandingPageLayout";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";
import Information from "./signup/Information";
import ResetPassword from "./forgot_password/ResetPassword";
import OtpScreen from "./forgot_password/OtpScreen";
import ConfirmPassword from "./forgot_password/ConfirmPassword";
import About from "./Home/About";
import Blogs from "./Home/Blogs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/info" element={<Information />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/otp" element={<OtpScreen />} />
        <Route path="/new_password" element={<ConfirmPassword />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
