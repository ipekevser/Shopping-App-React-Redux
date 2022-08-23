import classes from "./CartButton.module.css";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <div>
        <span>My Cart</span>
        <span className={classes.badge}>0</span>
      </div>
    </button>
  );
};

export default CartButton;
