// src/CategoryForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const AddCategory = () => {
  const [category_name, setCategoryName] = useState('');
  const [discription, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
   try {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }}
      const response=  await axios.post("http://localhost:5000/digitalflack/employee/addcategory" ,{ category_name,discription, status},options)
         debugger
      if(response) {
            toast.success("Added category")
         }
        } catch (error){
            console.error('Add category failed:');
        }

         


  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <input type="text" value={category_name} onChange={(e) => setCategoryName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={discription} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
