import React from "react";
import styles from "./signup.module.css";

const Signup = () => {
  return (
    <div className={styles.app}>
      <form>
        <div className={styles.formControl}>
          <label>نام</label>
          <input type="text" />
        </div>
        <div className={styles.formControl}>
          <label>ایمیل</label>
          <input type="text" />
        </div>
        <div className={styles.formControl}>
          <label>پسورد</label>
          <input type="text" />
        </div>
        <button>ثبت‌نام</button>
      </form>
    </div>
  );
};

export default Signup;
