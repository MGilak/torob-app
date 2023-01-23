import React, { useState } from "react";
import styles from "./Header.module.css";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [showLabel, setShowLabel] = useState(false);

  const rotate_label = showLabel && styles.rotate_label;

  return (
    <div>
      <div className={styles.mobies_header}>
        <div className={styles.mobies_header_right}>
          <p>همه دسته‌ها</p>
          <span> / </span>
          <p> موبایل و کالای دیجیتال</p>
          <span> / </span>
          <p>گوشی موبایل</p>
        </div>
        <div className={styles.mobies_header_left}>
          <div
            className={styles.mobies_header_left_label}
            onClick={() => setShowLabel(!showLabel)}
          >
            <p>محبوب‌ترین‌</p>
            <IoIosArrowDown className={rotate_label} />
          </div>
          {showLabel && (
            <ul className={styles.mobies_header_left_menu}>
              <li>محبوب‌ترین‌</li>
              <li>ارزان‌ترین</li>
              <li>گران‌ترین</li>
              <li>جدیدترین</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
