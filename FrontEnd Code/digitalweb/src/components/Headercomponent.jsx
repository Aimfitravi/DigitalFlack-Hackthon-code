import React, { Profiler, useEffect ,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
// import MainLogo from "./pics/digitalFlake.jpg";
import { toast } from 'react-toastify';

function Headercomponent() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  // const user = JSON.parse(localStorage.getItem("UserInformation"));
  const user = {
    firstName: "Ravikiran"
  }

  useEffect(() => {

    if(sessionStorage.getItem('LoginStatus') !==undefined ){
      setIsLoggedIn(true);
      } ;
  })

  function signOut() {
    toast.success("Log out success", {
      autoClose: 100000, // Set the duration in milliseconds
    });
     sessionStorage.clear();
    navigate("/")
  }
  function Profile() {
    navigate("/userprofile")
  }
  return (
    <>
      <nav className="nav">
        <div className="container">
          <h1 className="logo">
            <a href="/">
              digitalflake
            </a>
          </h1>
          <ul>
            <li>
              <a href="/" className="current" onClick={signOut}>
               {isLoggedIn ? "Log out" : "Profile "}  
                   
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Headercomponent;