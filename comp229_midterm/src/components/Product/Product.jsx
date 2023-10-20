import React, { useState } from "react";
import "./product.css";

export default function Product() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            ` Name: ${formData.name}\n Description: ${formData.description}\n Category: ${formData.category}\n Quantity: ${formData.quantity}\n Price: ${formData.price}`
        );
    };

    const handleCancel = (event) => {
        setFormData({
            name: "",
            description: "",
            category: "",
            quantity: "",
            price: "",
        });        
    };
    
  return (
      <form className="product">
          <h2 class="centered-title">New Product</h2>          
          <label className="product__text" htmlFor="name">
              Name:
          </label>
          <input
              type="text"
              id="name"
              placeholder="Name"
              className="product__input"
              name="name"
              value={formData.name}
              onChange={handleChange}
          />

          <label className="product__text" htmlFor="description">
              Description:
          </label>
          <input
              type="text"
              id="description"
              placeholder="Description"
              className="product__input"
              name="description"
              value={formData.description}
              onChange={handleChange}
          />
          
          <label className="product__text" htmlFor="category">
              Category:
          </label>
          <input
              type="text"
              id="category"
              placeholder="Category"
              className="product__input"
              name="category"
              value={formData.category}
              onChange={handleChange}
          />

          <label className="product__text" htmlFor="quantity">
              Quantity:
          </label>
          <input
              type="number"
              id="quantity"
              placeholder="Quantity"
              className="product__input"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
          />

          <label className="product__text" htmlFor="price">
              Price:
          </label>
          <input
              type="number"
              id="price"
              placeholder="Price"
              className="product__input"
              name="price"
              value={formData.price}
              onChange={handleChange}
          />
          

          <button className="product__button" type="submit" onClick={handleSubmit}>
              Submit
          </button>
          <button className="product__button" type="cancel" onClick={handleCancel}>
              Cancel
          </button>
      </form>
  );
}
