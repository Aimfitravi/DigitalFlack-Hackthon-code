const category = require("../model/categoryModel");

//get the category
const getallCategory = async (req, res) => {
  const allcategory = await category.find();
  res.status(200).json(allcategory);
};

//add category
const addCategory = async (req, res) => {
  console.log(req.body);
  const { category_name, discription, status } = req.body;

  const newCategory = new category({
    category_name,
    discription,
    status,
  });
  const category1 = await category.create(newCategory);
  res.status(201).json(category1);
};

//update category
const updateCategory = async (req, res) => {
  const findcategory = await category.findById(req.params.id);

  console.log(findcategory);

  if (!findcategory) {
    res.status(404);
    // throw new Error("User not found");
  }
  const updatedCategory = await category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  console.log(updatedCategory);
  res.status(200).json("category updated successfully");
};

//delete category
const deleteCategory = async (req, res) => {
  // const user = await users.findById(req.params.id);
  // console.log(user);

  // if (!user) {
  //     res.status(404);
  //     throw new Error("User not found");
  // }
  // await users.remove(user);

  const deletedCategory = await category.findByIdAndDelete(req.params.id);
  console.log(deletedCategory);
  if (deletedCategory) {
    res.status(200).json("category deleted");
  } else {
    res.status(404).json(" Category not found");
  }
};

module.exports = {
  addCategory,
  updateCategory,
  getallCategory,
  deleteCategory,
};
