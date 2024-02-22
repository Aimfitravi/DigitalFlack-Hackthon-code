import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

function CatagoryComponent() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  function handleclick() {
    navigate("/addcategory");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        };
        const response = await axios.get('http://localhost:5000/digitalflack/employee/getallcategory', options);
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to get all categories", error);
        // You can also display an error message to the user using toast.error or any other method.
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount.

  return (
    <div className="mainCard">
      <div className="Table-Header-Card">
        
        <div>Name</div>
        <div>Description</div>
        <div>Status</div>
      </div>
      <div className="mainValueCard">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div className="TableRow" key={category.id}>
            
              <div>{category.category_name}</div>
              <div>{category.discription}</div>
              <div>{category.status}</div>
            </div>
          ))
        ) : (
          <div>No categories found</div>
        )}
      </div>
      <button style={{ backgroundColor: "#bb86fc" }} onClick={handleclick}>
        Add Category
      </button>
    </div>
  );
}

export default CatagoryComponent;
