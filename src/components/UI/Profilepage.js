import React, { useState, useEffect } from "react";
import classes from "./Profilepage.module.css";
const ProfilePage = () => {
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
  // if (Object.entries(order).length === 0) {
  //   return;
  // }
  const TotalPrice = order.items.reduce((e, u) => e + u.price * u.quantity, 0);
  const TotalTax = order.items.reduce((e, u) => e + u.tax_pct * u.quantity, 0);
  const ToTaxAmount = (TotalTax / 100) * TotalPrice;
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <img
          src={
            "https://media-exp1.licdn.com/dms/image/C5622AQG-8cIXHY6L9Q/feedshare-shrink_1280/0/1591382449311?e=1634169600&v=beta&t=vRhQq3xXl8gOnFRpjrQ4dsg_4eIVBe0pLUr0RtWzsnI"
          }
          alt={"user"}
          width={"100"}
        />
        <h4>Eyio' Oladimeji</h4>
        <p>Frontend Developer</p>
      </div>
      <div className={classes.right}>
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
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
