// LoginForm.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from "react-router-dom";
 
const LoginFormComponent = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [emailId, setEmailId] = useState("");

  const [emailIdErr, setEmailIdErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [message, setMessage] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [isError, setError] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // // Add your authentication logic here
    // // For simplicity, let's just check if both username and password are not empty
    if (emailId && password) {
      onLogin();
    } else {
      alert('Please enter both username and password.');
    }
        
      debugger  
   
  };
 

 

  //passwordhandler
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("token"));
    if(user!=null){
      navigate("/pageNotFound");
      window.location.reload(true);
    } 
    
  }, [])

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 6) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
  }

  
  function emailIdValidation(e) {
    let item = e.target.value;
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
    if (regex.test(item)) {   
      setEmailIdErr(false);
    } else if (!regex.test(emailId) && emailId !== "") {
      setEmailIdErr(true);
    } else {
      setEmailIdErr(true);
    }
    setEmailId(item);
  }

 async function  onLogin() {
  if (!emailIdErr && !passwordErr) {
    try {
      
      const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }}
    
        const response = await axios.post('http://localhost:5000/digitalflack/employee/login', { emailId, password }, options);
        sessionStorage.setItem('token', response.data.token);
        
        console.log('Login successful. Token:', response.data.token);
        // Do something with the token, e.g., store it in local storage
    } catch (error) {
        console.error('Login failed:', error.response.data.message);
    }
} else {
    alert('Please enter valid email and password.');
}
 }
//    debugger
//   //   try {
//   //     const response =  axios.post('http://localhost:5000/login', { emailId, password });
//   //     debugger
//   //     const { token } = response.data;
//   //     debugger
//   //     // Store the token in localStorage or a state management solution (Redux, Context API, etc.)
//   //     console.log('Login successful. Token:', token);
//   //   } catch (error) {
//   //     console.error('Login failed:', error.response.data.message);
//   //   }
//   // }


//   try {
//     const response = await axios.post('http://localhost:5000/digitalflack/employee/login', { emailId, password });
    
//     // const { token } = response.data;
//     if(response)
//     console.log('Login successful. Token:');
//      console.log(response);
    
//   } catch (error) {
//     console.error('Login fail :');
//   }
// }
  
  


  return (
      <div className="login-form-container">
        <div className="login-form">
          <br></br>
          <div className="container">
            <div className="row">
              <div
                className="card col-md-6 offset-md-3 offset-md-3"
                style={{ backgroundColor: "transparent" }}
              >
                <h1 className="text-center" style={{ color: "Black" }}>
                  digitalflake
                  
                </h1>
                <div className="text-center" style={{ color: "Black"}}>
                  Welcome to Digitalflake Admin</div>
                <div className="card-body">
                  <div className="form-group">
                    <label style={{ color: "Black" }}>Email Id:</label>
                    <input
                    
                      type="text"
                      placeholder="Enter Email"
                      value={emailId}
                      onChange={emailIdValidation}
                    />
                    <br />
                    {emailIdErr ? (
                      <div className="validation" style={{ color: "Black" }}>
                       Invalid Email Address
                      </div>
                    ) : null}
                    
                  </div>
                  <div className="form-group" style={{marginTop: '-103px'}}>
                    <label style={{ color: "Black" }}>Password:</label>
                    <input
                      
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={passwordHandler}
                    />
                    <br />
                    {passwordErr ? (
                      <div className="validation" style={{ color: "Black" }}>
                        Enter Password with minimum 6 characters
                      </div>
                    ) : null}
                  </div>
                  {!passwordErr && !emailIdErr ? (
                    <div>
                      <center>
                        <button
                          onClick={handleSubmit}
                        >
                          LOGIN
                        </button>
                        {isError ? (
                          <div className="validation">{errormsg}</div>
                        ) : null}
                      </center>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};
 
export default LoginFormComponent;
// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginFormComponent = () => {
//     const [emailId, setEmailId] = useState("");
//     const [password, setPassword] = useState("");
//     const [emailIdErr, setEmailIdErr] = useState(false);
//     const [passwordErr, setPasswordErr] = useState(false);

//     const emailIdValidation = (e) => {
//         const item = e.target.value;
//         const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
//         setEmailId(item);
//         setEmailIdErr(!regex.test(item) && item !== "");
//     };

//     const passwordHandler = (e) => {
//         const item = e.target.value;
//         setPassword(item);
//         setPasswordErr(item.length < 6);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         if (!emailIdErr && !passwordErr) {
//             try {
//                 const response = await axios.post('http://localhost:5000/digitalflack/employee/login', { emailId, password });
//                 console.log('Login successful. Token:', response.data.token);
//                 // Do something with the token, e.g., store it in local storage
//             } catch (error) {
//                 console.error('Login failed:', error.response.data.message);
//             }
//         } else {
//             alert('Please enter valid email and password.');
//         }
//     };

//     return (
//         // ... Your JSX code for the login form
//         <div className="login-form-container">
//         <div className="login-form">
//           <br></br>
//           <div className="container">
//             <div className="row">
//               <div
//                 className="card col-md-6 offset-md-3 offset-md-3"
//                 style={{ backgroundColor: "transparent" }}
//               >
//                 <h1 className="text-center" style={{ color: "Black" }}>
//                   digitalflake
                  
//                 </h1>
//                 <div className="text-center" style={{ color: "Black"}}>
//                   Welcome to Digitalflake Admin</div>
//                 <div className="card-body">
//                   <div className="form-group">
//                     <label style={{ color: "Black" }}>Email Id:</label>
//                     <input
                    
//                       type="text"
//                       placeholder="Enter Email"
//                       value={emailId}
//                       onChange={emailIdValidation}
//                     />
//                     <br />
//                     {emailIdErr ? (
//                       <div className="validation" style={{ color: "Black" }}>
//                        Invalid Email Address
//                       </div>
//                     ) : null}
                    
//                   </div>
//                   <div className="form-group" style={{marginTop: '-103px'}}>
//                     <label style={{ color: "Black" }}>Password:</label>
//                     <input
                      
//                       type="password"
//                       placeholder="Enter Password"
//                       value={password}
//                       onChange={passwordHandler}
//                     />
//                     <br />
//                     {passwordErr ? (
//                       <div className="validation" style={{ color: "Black" }}>
//                         Enter Password with minimum 6 characters
//                       </div>
//                     ) : null}
//                   </div>
//                   {!passwordErr && !emailIdErr ? (
//                     <div>
//                       <center>
//                         <button
//                           onClick={handleSubmit}
//                         >
//                           LOGIN
//                         </button>
//                         {isError ? (
//                           <div className="validation">{errormsg}</div>
//                         ) : null}
//                       </center>
//                     </div>
//                   ) : null}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default LoginFormComponent;
