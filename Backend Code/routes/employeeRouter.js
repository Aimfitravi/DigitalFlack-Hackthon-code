const express = require("express");
const router = express.Router();

//employee
const {
  registerEmployee,
  updateEmployee,
  employeeLogin,
} = require("../controller/employeeController");

//category
const {
  addCategory,
  updateCategory,
  getallCategory,
  deleteCategory,
} = require("../controller/categoryController");
const app = express();

//products
const {
    getallproducts,
    getProductById,
    addproduct,
     updateproduct,
     deleteproduct
} = require("../controller/productController");

// employee controller

router.route("/register").post(registerEmployee);
router.route("/:id").put(updateEmployee);
router.route("/login").post(employeeLogin);


// category controller

router.route("/addcategory").post(addCategory)
router.route("/updatecategory/:id").put(updateCategory);
router.route("/getallcategory").get(getallCategory);
router.route("/deletecategory/:id").delete(deleteCategory);


//products controller
router.route("/getallproduct").get(getallproducts);
 router.route("/getproduct/:id").get(getProductById);
 router.route("/addproduct").post(addproduct);
 router.route("/updateproduct/:id").put(updateproduct);
 router.route("/deleteproduct/:id").delete(deleteproduct);


module.exports = router;
