import React from "react";
import styles from "./Navigation.module.css";
import { data } from "./navbar-data.js";
import { BsSearch } from "react-icons/bs";
import logo from "../../Image/torob_logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_search}>
          <div className={styles.header_search_top}>
            <Link to="/">
              <img src={logo} alt="logo" />
              <p>ترب</p>
            </Link>
            <form className={styles.search_form}>
              <input
                className={styles.input}
                type="text"
                placeholder="نام کالا را وارد کنید"
              />
              <button type="submit">
                <BsSearch fontWeight={900} fontSize={23} />
              </button>
            </form>
          </div>
          <div className={styles.header_button}>
            <button>ورود / ثبت‌ نام</button>
          </div>
        </div>
        <nav>
          <ul className={styles.product_list}>
            {data.map((item) => (
              <li key={item}>
                <a href="##">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
