"use client";

import Image from "next/image";
import styles from "./page.module.css";
import ProductItem from "../components/ProductItem/ProductItem";
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
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}