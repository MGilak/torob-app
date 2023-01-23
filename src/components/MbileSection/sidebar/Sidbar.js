import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowUp,
  IoMdSquareOutline,
  IoMdCheckbox,
} from "react-icons/io";
import Brands from "./brands/Brands";
import styles from "./Sidebar.module.css";
import { BsSearch } from "react-icons/bs";

const Sidbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showCost, setShowCost] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [check, setCheck] = useState(false);
  const [showInventory, setShowInventory] = useState(false);

  // conditional classes
  const show_categories = showCategories && styles.show_categories;
  const rotate_categories_title =
    showCategories && styles.rotate_categories_title;
  const show_cost = showCost && styles.show_cost;
  const rotate_cost_title = showCost && styles.rotate_cost_title;
  const show_result = showResult && styles.show_result;
  const rotate_result_title = showResult && styles.rotate_result_title;
  const show_inventory = showInventory && styles.show_inventory;
  const rotate_show_inventory = show_inventory && styles.rotate_show_inventory;

  return (
    <div className={styles.sidebar}>
      {/* brands */}
      <Brands />
      {/* Similar categories */}
      <div
        className={`${styles.title} ${rotate_categories_title}`}
        onClick={() => setShowCategories(!showCategories)}
      >
        <IoIosArrowUp />
        <p>دسته‌های مشابه</p>
      </div>
      <div className={`${styles.categories} ${show_categories}`}>
        <div className={`${styles.category_title} ${styles.categories_font}`}>
          <IoIosArrowBack />
          <p>موبایل و کالای دیجیتال</p>
        </div>
        <div className={`${styles.category_title} ${styles.categories_font}`}>
          <IoIosArrowDown />
          <p>گوشی موبایل</p>
        </div>
        <ul className={`${styles.categories_font}`}>
          <li>تبلت</li>
          <li>هدفون، هدست و هندزفری</li>
          <li>قطعات موبایل و تبلت</li>
          <li>لوازم الکتریکی همراه</li>
          <li>نمایش تمام دسته‌بندی‌ها</li>
        </ul>
      </div>
      {/* cost */}
      <div
        className={`${styles.title} ${rotate_cost_title}`}
        onClick={() => setShowCost(!showCost)}
      >
        <IoIosArrowUp />
        <p>قیمت (تومان)</p>
      </div>
      <div className={`${styles.cost} ${show_cost}`}>
        <div className={styles.range}>
          <div className={styles.range_up}>
            <div className={styles.range_from}>
              <span>از</span>
              <input type="text" placeholder="" />
            </div>
            <div className={styles.range_to}>
              <span>تا</span>
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className={styles.range_down}>
            <button>اعمال فیلتر قیمت</button>
          </div>
        </div>
      </div>
      {/* search result */}
      <div
        className={`${styles.title} ${rotate_result_title}`}
        onClick={() => setShowResult(!showResult)}
      >
        <IoIosArrowUp />
        <p>جست‌وجو در نتایج</p>
      </div>
      <div className={`${styles.search_result} ${show_result}`}>
        <form className={styles.search_form}>
          <button type="submit">
            <BsSearch fontWeight={900} fontSize={20} />
          </button>
          <input className={styles.input} type="text" />
        </form>
      </div>
      {/* inventory */}
      <div
        className={`${styles.title} ${rotate_show_inventory}`}
        onClick={() => setShowInventory(!showInventory)}
      >
        <IoIosArrowUp />
        <p>موجودی</p>
      </div>
      <div className={`${styles.inventory} ${show_inventory}`}>
        <div
          className={styles.check_inventory}
          onClick={() => setCheck(!check)}
        >
          {check ? <IoMdSquareOutline /> : <IoMdCheckbox />}
        </div>
        <p>نمایش محصولات موجود</p>
      </div>
      <div className={styles.list}>
        <p>لیست قیمت گوشی موبایل</p>
      </div>
      {/* classification */}
      <div className={styles.classification}>
        <div className={styles.classification_title}>
          <p>دسته‌بندی‌های پربازدید</p>
        </div>
        <ul>
          <li>قیمت گوشی شیائومی</li>
          <li>قیمت گوشی سامسونگ</li>
          <li>قیمت گوشی اپل</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidbar;
