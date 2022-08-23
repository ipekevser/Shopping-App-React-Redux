import classes from "./ProductItem.module.css";
/* 
import { useDispatch } from "react-redux"; */

/* import { cartActions } from "../../store/cart-slice"; */

const ProductItem = (props) => {
  /*  const dispatch = useDispatch(); */

  const { title, price, image } = props;

  /* const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

     dispatch(
       cartActions.addItemToCart({
         id,
         title,
         price,
       })
     );
  }; */

  return (
    <li className={classes.gridItem}>
      <div className={classes.item}>
        <div className={classes.header}>
          <h3> {title}</h3>
        </div>
        <div className={classes.product}>
          <img src={image} alt="product" className={classes.img} />
        </div>
        <div className={classes.actions}>
          <div className={classes.price}>${price.toFixed(2)}</div>
          <button className={classes.cart} /* onClick={addToCartHandler} */>
            Add to Cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
