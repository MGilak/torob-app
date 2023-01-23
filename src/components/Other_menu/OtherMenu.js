import React from "react";
import styles from "./OtherMenu.module.css";
import { Link } from "react-router-dom";
import {
  mobile,
  tablet,
  headset,
  mobileParts,
  electrical,
  watch,
} from "./mobiles.js";

const OtherMenu = ({ open }) => {
  return (
    open && (
      <div className={styles.container}>
        <div className={styles.header}>
          <a href="#">موبایل و کالای دیجیتال</a>
        </div>
        <div className={styles.body}>
          <div className={styles.col1}>
            <ul>
              <h5>گوشی موبایل</h5>
              {mobile.map((item) => (
                <li>
                  <Link to="/mobileSection">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col1}>
            <ul>
              <h5>تبلت</h5>
              {tablet.map((item) => (
                <li>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col1}>
            <ul>
              <h5>هدفون، هدست و هندزفری</h5>
              {headset.map((item) => (
                <li>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col1}>
            <ul>
              <h5>قطعات موبایل و تبلت</h5>
              {mobileParts.map((item) => (
                <li>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col1}>
            <ul>
              <h5>لوازم الکتریکی همراه</h5>
              {electrical.map((item) => (
                <li>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col1}>
            <ul>
              <h5>ساعت و مچ بند هوشمند</h5>
              {watch.map((item) => (
                <li>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default OtherMenu;
