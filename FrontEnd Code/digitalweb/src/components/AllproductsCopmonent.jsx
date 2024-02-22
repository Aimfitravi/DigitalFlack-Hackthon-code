import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AllproductComponent() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  function handleclick() {
    navigate("/addproduct");
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
        const response = await axios.get('http://localhost:5000/digitalflack/employee/getallproduct', options);
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to get all products", error);
        // You can also display an error message to the user using toast.error or any other method.
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount.

  return (
    <div className="mainCard">
      <div className="Table-Header-Card">
        <div>categoryName</div>
        <div>productName</div>
        <div>pack size</div>
        <div>Product MRP</div>
        <div>product image</div>
        <div>Status</div>
      </div>
      <div className="mainValueCard">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="TableRow" key={product._id}>
              <div>{product.category_name}</div>
              <div>{product.product_name}</div>
              <div>{product.pack_size}</div>
              <div>{product.product_MRP}</div>
              <div>
                <img src={product.product_image} alt="product image" />
              </div>
              <div>{product.status}</div>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
      <button style={{ backgroundColor: "#bb86fc" }} onClick={handleclick}>
        Add products
      </button>
    </div>
  );
}

export default AllproductComponent;
