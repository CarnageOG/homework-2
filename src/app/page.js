"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function home() {
  const [products, setProducts] = useState ([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try{
      fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
    } catch (error){
      setError(true)
    } finally {
      setLoading(false);
    }
  }, []);

  if(loading) {
    return(
      <div>Loading</div>
    )
  };

  if(error) {
    return(
      <div>Something went wrong</div>
    )
  };

  return (
    <div className={styles.div_wrapper}>
      {products.map((product) => (
        <div className={styles.div_products} key={product.id}>
          <h1 className={styles.product_title}>{product.title}</h1>
          <p>Price: {product.price} $</p>
          <p className={styles.product_des}>{product.description}</p>
          <img className={styles.product_img} src={product.image} alt={product.title} />
          <div className={styles.product_category}>{product.category}</div>
        </div>
      ))}
    </div>
  );
}