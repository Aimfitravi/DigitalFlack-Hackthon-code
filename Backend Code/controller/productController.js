const product=require('../model/productModel');
const category = require("../model/categoryModel");

const getallproducts= async (req, res) => {
  var allproduct= await product.find();
    // const allproducts = await products.find();
    res.status(200).json(allproduct);
  };



  const getProductById= async (req, res) => {
    //console.log(req);
   console.log(req.param.id)
      const oneproduct = await product.findById(req.param.id);
      console.log(oneproduct)
      res.status(200).json(oneproduct);
    };  
4
  const addproduct = async (req, res) => {
    // console.log(req.body);
    console.log(req.body.id)
      var allcategory = await category.findById(req.body.id);
      console.log(allcategory);

    var{ category_name, product_name , pack_size ,  product_MRP , product_iamge ,status } = req.body;
  
     category_name= allcategory.category_name;
    var newproduct = new product({
      category_name,
      product_name,
      pack_size,
      product_MRP,
      product_iamge,
      status
    });
    console.log(newproduct);
    const p = await product.create(newproduct);
    res.status(201).json(p);
  };

  const updateproduct = async (req, res) => {
    const existproduct = await product.findById(req.params.id);
    console.log( existproduct);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    const updatedproduct = await product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json("product updated successfully");
  }  

  const deleteproduct = async (req, res) => {
    const existproduct = await product.findById(req.params.id);
    console.log( existproduct);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    const deletedproduct = await product.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json("product deleted successfully");
  }






  module.exports = {
    getallproducts,
    addproduct ,
    updateproduct,
     deleteproduct,
     getProductById
};
  

