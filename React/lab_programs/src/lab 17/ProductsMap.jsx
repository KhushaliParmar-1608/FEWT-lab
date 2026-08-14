import React from "react";
import "./ProductMapCss.css";

function ProductsMap() {
  const products = [
    {
      name: "Wireless Headphones",
      price: 2499,
      category: "Electronics",
      rating: 4.5,
      stock: 25,
      image: "https://placehold.co/400x400?text=Headphones",
    },
    {
      name: "Smart Watch",
      price: 3999,
      category: "Electronics",
      rating: 4.3,
      stock: 18,
      image: "https://placehold.co/400x400?text=Smart+Watch",
    },
    {
      name: "Running Shoes",
      price: 2999,
      category: "Fashion",
      rating: 4.6,
      stock: 30,
      image: "https://placehold.co/400x400?text=Running+Shoes",
    },
    {
      name: "Laptop Backpack",
      price: 1499,
      category: "Bags",
      rating: 4.4,
      stock: 42,
      image: "https://placehold.co/400x400?text=Laptop+Backpack",
    },
    {
      name: "Mechanical Keyboard",
      price: 2799,
      category: "Electronics",
      rating: 4.7,
      stock: 15,
      image: "https://placehold.co/400x400?text=Keyboard",
    },
    {
      name: "Cotton T-Shirt",
      price: 799,
      category: "Fashion",
      rating: 4.2,
      stock: 50,
      image: "https://placehold.co/400x400?text=Cotton+T-Shirt",
    },
    {
      name: "Water Bottle",
      price: 599,
      category: "Accessories",
      rating: 4.5,
      stock: 60,
      image: "https://placehold.co/400x400?text=Water+Bottle",
    },
  ];

  console.log(products);

  return (
    <>
      {products.length > 0 ? (
        products.map((p) => (
          <div
            class="card"
            style={{
              width: "30%",
              display: "inline-block",
              verticalAlign: "top",
              margin: "1.5%",
              boxSizing: "border-box",
            }}
          >
            <img
              src={p.image}
              class="card-img-top"
              alt={p.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div class="card-body">
              <h5 class="card-title">{p.name}</h5>
              <p class="card-text">{p.price}</p>
              <p class="card-text">{p.category}</p>
              <p class="card-text">{p.rating}</p>
              <p class="card-text">{p.stock}</p>

              <a href="#" class="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        ))
      ) : (
        <h1>Infornation Is not availabe</h1>
      )}
    </>
  );
}

export default ProductsMap;
