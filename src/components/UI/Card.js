import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  const [order, setOrder] = useState({
    restaurant: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
    },
    user: {
      name: "",
      id: "",
      address: "",
      phone: "",
      about: "",
      likes: ["", "", ""],
      dislikes: ["", "", ""],
    },
    items: [
      {
        name: "",
        category: "",
        price: "",
        currency: "",
        tax_pct: "",
        quantity: "",
      },
      {
        name: "",
        category: "",
        price: "",
        currency: "",
        tax_pct: "",
        quantity: "",
      },
      {
        name: "",
        category: "",
        price: "",
        currency: "",
        tax_pct: "",
        quantity: "",
      },
      {
        name: "",
        category: "",
        price: "",
        currency: "",
        tax_pct: "",
        quantity: "",
      },
    ],
  });

  useEffect(() => {
    async function fetchOrder() {
      const response = await fetch("https://indapi.kumba.io/webdev/assignment");
      const a = await response.json();
      console.log(a);
      setOrder(a);
    }
    fetchOrder();
  }, []);

  const TotalPrice = order.items.reduce((e, u) => e + u.price * u.quantity, 0);

  const TotalTax = order.items.reduce((e, u) => e + u.tax_pct * u.quantity, 0);
  const TotalTaxAmount = (TotalTax / 100) * TotalPrice;
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}></div>
      <div className={classes.right}>
        <div className={classes.info}>
          <h3>Restaurant Details</h3>
          <div className={classes.info_data}>
            <div className={classes.data}>
              <h4>Name </h4>
              <p>{order.restaurant.name}</p>
            </div>
            <div className={classes.data}>
              <h4>City</h4>
              <p>{order.restaurant.city}</p>
            </div>
            <div className={classes.data}>
              <h4>State</h4>
              <p>{order.restaurant.state}</p>
            </div>
            <div className={classes.data}>
              <h4>Street</h4>
              <p>{order.restaurant.street}</p>
            </div>
            <div className={classes.data}>
              <h4>Zipcode</h4>
              <p>{order.restaurant.zipcode}</p>
            </div>
          </div>
        </div>

        <div className={classes.projects}>
          <h3>Customer Details</h3>
          <div className={classes.projects_data}>
            <div className={classes.data}>
              <h4>Name</h4>
              <p>{order.user.name}</p>
            </div>
            <div className={classes.data}>
              <h4>About</h4>
              <p>{order.user.about}</p>
            </div>
            <div className={classes.data}>
              <h4>Address</h4>
              <p>{order.user.address}</p>
            </div>
            <div className={classes.data}>
              <h4>Dislikes</h4>
              <p>{order.user.dislikes}</p>
            </div>

            <div className={classes.data}>
              <h4>Phone</h4>
              <p>{order.user.phone}</p>
            </div>
          </div>
          <div className={classes.projects}>
            <h3>Order Details </h3>
            <div className={classes.projects_data}>
              <div className={classes.data}>
                <h4>Name</h4>
                <p>{order.items[0].name}</p>
                <h4>Category</h4>
                <p>{order.items[0].category}</p>
                <h4>Price</h4>
                <p>₹{order.items[0].price}</p>
                <h4>Quantity</h4>
                <p>{order.items[0].quantity}</p>
                <h4>Tax Percentage</h4>
                <p>{order.items[0].tax_pct}%</p>
              </div>
              <div className={classes.data}>
                <h4>Name</h4>
                <p>{order.items[1].name}</p>
                <h4>Category</h4>
                <p>{order.items[1].category}</p>
                <h4>Price</h4>
                <p>₹{order.items[1].price}</p>
                <h4>Quantity</h4>
                <p>{order.items[1].quantity}</p>
                <h4>Tax Percentage</h4>
                <p>{order.items[1].tax_pct}%</p>
              </div>
              <div className={classes.data}>
                <h4>Name</h4>
                <p>{order.items[2].name}</p>
                <h4>Category</h4>
                <p>{order.items[1].category}</p>
                <h4>Price</h4>
                <p>₹{order.items[2].price}</p>
                <h4>Quantity</h4>
                <p>{order.items[2].quantity}</p>
                <h4>Tax Percentage</h4>
                <p>{order.items[2].tax_pct}%</p>
              </div>
              <div className={classes.data}>
                <h4>Name</h4>
                <p>{order.items[2].name}</p>
                <h4>Category</h4>
                <p>{order.items[1].category}</p>
                <h4>Price</h4>
                <p>₹{order.items[2].price}</p>
                <h4>Quantity</h4>
                <p>{order.items[2].quantity}</p>
                <h4>Tax Percentage</h4>
                <p>{order.items[2].tax_pct}%</p>
              </div>
            </div>
          </div>
          <div className={classes.projects}>
            <h3> Amount Summary</h3>
            <div className={classes.projects_data}>
              <div className={classes.data}>
                <h4>Total Price</h4>
                <h1>₹{TotalPrice}</h1>
              </div>
              <div className={classes.data}>
                <h4>Total Tax</h4>
                <h1>{TotalTax}%</h1>
              </div>
              <div className={classes.data}>
                <h4>Total Tax Amount</h4>
                <h1>₹{TotalTaxAmount}</h1>
              </div>
              <div className={classes.data}>
                <h4>Total Amount</h4>
                <h1>₹{TotalPrice + TotalTaxAmount}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
