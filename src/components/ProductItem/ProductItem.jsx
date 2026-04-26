import styles from "./ProductItem.module.css"

const ProductItem = ({ product }) => {
    return (
        <div className={styles.div_products}>
          <h1 className={styles.product_title}>{product.title}</h1>
          <p>Price: {product.price} $</p>
          <p className={styles.product_des}>{product.description}</p>
          <img className={styles.product_img} src={product.image} alt={product.title} />
          <div className={styles.product_category}>{product.category}</div>
        </div>
    );
};

export default ProductItem;