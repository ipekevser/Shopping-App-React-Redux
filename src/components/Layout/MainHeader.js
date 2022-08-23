import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <h1>Shopping App</h1>
        <nav>
          <ul>
            <li>Women |</li>
            <li>Men |</li>
            <li>Jewelery |</li>
            <li>Electronics </li>
          </ul>
        </nav>
      </div>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
          <li>
            <a href="#!">Sign In</a>
            <span>|</span>
            <a href="#!">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
