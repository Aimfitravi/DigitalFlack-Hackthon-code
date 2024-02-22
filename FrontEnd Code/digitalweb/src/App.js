import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Signupcomponent from "./components/Signupcomponent";
import Headercomponent from "./components/Headercomponent";
import SideBarComponent from "./components/SideBarComponent";
import LoginFormComponent from "./components/LoginFormComponent";
import CatagoryComponent from "./components/categoryComponent";
import AddCategory from "./components/AddCategory";
import AllproductComponent from "./components/AllproductsCopmonent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // You would typically have some authentication logic here
    // For the sake of the example, we'll just set isLoggedIn to true
    sessionStorage.setItem("LoginStatus", true);
    if (
      sessionStorage.getItem("token") !== null ||
      sessionStorage.getItem("loginStatus") === undefined
    ) {
      setIsLoggedIn(true);
    }
  };
  debugger;
  useEffect(() => {
    debugger;
    if (sessionStorage.getItem("LoginStatus") !== undefined) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <>
      <BrowserRouter>
        <div>
         
          <Headercomponent />
          {isLoggedIn ? (
            <div>
              <SideBarComponent />
            </div>
          ) : (
            <LoginFormComponent onLogin={handleLogin} />
          )} 

        </div>
        <Routes>
          <Route path="/allproducts" element={<AllproductComponent />}></Route>
          {/* <Route path="/addproduct" element={<AddproductComponent />}></Route> */}

          <Route path="/signup" element={<Signupcomponent />}></Route>
          <Route path="/allcategory" element={<CatagoryComponent />}></Route>
           <Route path="/addcategory" element={<AddCategory />}></Route>
          {/* <Route path="/userIf" element={<Userinformationcomponent/>}></Route>
        <Route path="/login" element={<Logincomponenet/>}></Route>
        <Route path="/deleteuserinformation" element={<Deleteuserinformationcomponent/>}></Route>
        <Route path="/userprofile" element={<Userprofilecomponent/>}></Route> */}
        </Routes>
        {/* <Footercomponent/> */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
