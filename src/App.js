import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/Home/Home-page';
import Login from './Components/Account/Login';
import Register from './Components/Account/Register';
import AuthPage from './Components/Account/AuthPage';
import GoogleLoginPage from './Components/Account/GoogleLogin';
import RequireAuth from './Components/Account/RequireAuth';
import Users from './Components/Protected/Users';
import MyOrders from './Components/Protected/MyOrders';
import Unauthorized from './Components/Account/Unauthorized';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/google-login' element={<GoogleLoginPage/>}/>
        <Route path='/Unauthorized' element={<Unauthorized/>}/>

        <Route element= {<RequireAuth allowedRoles={["Staff"]}/>}>
          <Route path="/Users" element={<Users/>} />
        </Route>
        <Route element= {<RequireAuth allowedRoles={["Customer"]}/>}>
          <Route path="/MyOrders" element={<MyOrders/>} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
