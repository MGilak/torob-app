import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./Title.module.css";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className={styles.title}>
      <span>ترب</span>
      <IoIosArrowBack />
      <span>موبایل و کالای دیجیتال</span>
      <IoIosArrowBack />
      <span>
        <Link to="/mobileSection">گوشی موبایل</Link>
      </span>
      <IoIosArrowBack />
      <span>سامسونگ (samsung)</span>
    </div>
  );
};

export default Title;
