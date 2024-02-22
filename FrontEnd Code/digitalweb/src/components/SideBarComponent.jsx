import React, { Profiler } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import MainLogo from "./pics/digitalFlake.jpg";
import { toast } from 'react-toastify';

function SideBarComponent() {
    const navigate = useNavigate();
    // const user = JSON.parse(localStorage.getItem("UserInformation"));
    const user = {
        firstName: "nandkumar"
    }
    function signOut() {
        toast.success("Log out success")
        // localStorage.clear();
        navigate("/")
    }
    function Profile() {
        navigate("/userprofile")
    }
    return (
        <>
            <div className="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label=""></button>
                </div>
                <div className="offcanvas-body">


                    <h4  className="current">
                    <a href="/"> Home</a>
                    </h4>
                    <h4> <a href="/allcategory">Category</a> </h4>
                    <h4>  <a href="/allproducts"> Products</a> </h4>
                    
                </div> 
                <div className="welcome-text">
                <p></p>
            </div>
        
            </div>
        </>
    )
}
export default SideBarComponent;



