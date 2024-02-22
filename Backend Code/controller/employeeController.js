// // const asyncHandler = require("express-async-handler");
// const users = require("../model/employeeModel");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
    
// const secretKey = "digitalflake";


// const registerEmployee = async (req, res) => {
//     console.log(req.body);
//     const {  email, password } = req.body;
   
//   const hashedpassword = await bcrypt.hash(password,10); 
//   const newuser = new users ({
//         email,
//         password: hashedpassword
//     });
//     const user = await users.create(newuser);
//     res.status(201).json(user);
// };


// const updateEmployee = async (req, res) => {
//     const user = await users.findById(req.params.id);

//     console.log(user);

//     if (!user) {
//         res.status(404);
//         // throw new Error("User not found");
//     }
//     const updateduser = await users.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//     );
//     res.status(200).json(updateduser);
// };




// // const employeeLogin= async (req, res) => {
// //     // console.log(req.body);

// //     const {email,password} = req.body; 
// //     const user = await users.findOne({email});
// //     if(!user) {
// //         res.sendStatus(400).json({message: "user not valid "}) ;
// //     } else {

// //         const payload = { userId:user._id};


// //     // console.log(user.password);
// //     const isPasswordValid = await bcrypt.compare(password,user.password )

// //     const token = jwt.sign( payload, secretKey, { expiresIn: "1h" });
// //     console.log("JWT token is"+ token);

// //     if(email === user.email && isPasswordValid ){
// //              //res.send( {token: token});
// //             res.status(200).json({message: " Registration success"});
// //         }else{
// //             res.sendStatus(400).json({message: "validation error"}) ;

// //     }
// //     }
    

// // };

// const employeeLogin = async (req, res) => {
//     debugger
//  console.log("req from client");
//     const { email, password } = req.body;

//     try {
//         debugger
//         const user = await users.findOne({email:email});
//       console.log("user from database"+ user);
//         if (!user) {
//             return res.status(400).json({ message: "User not valid" });
//         }

//         const payload = { userId: user._id };
//         console.log(payload);
//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if (email === user.email && isPasswordValid) {
//             const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
//             console.log("JWT token is: " + token);
            
//             return res.status(200).json({ message: "Registration success", token });
//         } else {
//             return res.status(400).json({ message: "Validation error" });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// };



// // const userlogin = asyncHandler(async (req, res) => {
// //     try {
// //       const { email, password } = req.body;
  
// //       // Find the user in the database based on the email
// //       const user = await users.findOne({ email });
  
// //       if (!user) {
// //         return res.status(403).json({ message: "Invalid email or password" });
// //       }
  
// //       // Compare the plain text password with the hashed password from the database
// //       const isPasswordValid = await bcrypt.compare(password, user.password);
  
// //       if (isPasswordValid) {
// //         res.status(200).json({ message: "Login successful" });
// //       } else {
// //         res.status(403).json({ message: "Invalid email or password" });
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ message: "Internal Server Error" });
// //     }
// //   });

  
// module.exports = {  registerEmployee, updateEmployee ,employeeLogin };

// Assuming 'users' is a mongoose model
const users = require("../model/employeeModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = "digitalflake";

const registerEmployee = async (req, res) => {
    try {
        const { emailId, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await users.create({
            emailId,
            password: hashedPassword
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateEmployee = async (req, res) => {
    try {

       
        const user = await users.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const employeeLogin = async (req, res) => {
    try {
        console.log("client req");
        const { emailId, password } = req.body;
        const user = await users.findOne({ emailId });
        console.log(user);

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials " });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            const payload = { userId: user._id };
            const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
            res.status(200).json({ message: "Login successful", token });
        } else {
            res.status(400).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { registerEmployee, updateEmployee, employeeLogin };
