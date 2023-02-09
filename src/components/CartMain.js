import React from "react";

// styles
import styles from "./CartMain.module.css";

// components
import Cartbox from "./Cartbox.js";

const CartMain = () => {
  return (
    <div className={styles.cart_main}>
      <div className={styles.cart_list_courses}>
        <ul>
          <li>
            <h4>List of courses</h4>
          </li>
        </ul>
        <div className={styles.list_main}>
          <Cartbox />
        </div>
      </div>

      <div className={styles.cart_cost_courses}>
        <ul>
          <li>
            <h4>Cost of courses</h4>
          </li>
        </ul>
        <div className={styles.cost_main}>
          <div className={styles.cost}>
            <span>total:</span>
            <span>1000 $</span>
          </div>
          <div className={styles.discount_box}>
            <input type="text" />
            <button>action</button>
          </div>
          <div className={styles.discount_text}>
            <span>Discount:</span>
            <span>0 $</span>
          </div>
          <div className={styles.payable}>
            <span>Payable:</span>
            <span>0 $</span>
          </div>
          <button>Complete Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
