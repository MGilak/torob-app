import React from "react";
import logo from "../../Image/torob_logo.svg";
import style from "./main.module.css";
import { BsSearch } from "react-icons/bs";

const Main = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logo} alt="logo" />
        <div className={style.content}>
          <h2>ترب</h2>
          <p>مقایسۀ قیمت میلیون‌ها محصول بین هزاران فروشگاه</p>
        </div>
      </div>
      <form className={style.search_form}>
        <button type="submit">
          <BsSearch size={21}/>
        </button>
        <input
          className={style.input}
          type="text"
          placeholder="نام کالا را وارد کنید"
        />
      </form>
    </div>
  );
};

export default Main;
