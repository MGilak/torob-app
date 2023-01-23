import React, { useState } from "react";
import styles from "./Brands.module.css";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { mobileNames } from "./../data";

const Brands = () => {
  const [hide, setHide] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [input, setInput] = useState("");

  // conditional classes
  const completedClass = !hide && styles.show_brands;
  const rotate_bottom_title = hide && styles.rotate_bottom_title;
  const hide_brand = showMenu && styles.hide_brand;
  const rotate_brand_title = showMenu && styles.rotate_brand_title;
  const data = mobileNames.filter(
    (item) =>
      item["nameFa"].toLowerCase().includes(input) ||
      item["nameEn"].toLowerCase().includes(input)
  );

  // console.log(data);

  return (
    <div>
      <div
        className={`${styles.title} ${rotate_brand_title}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoIosArrowUp />
        <p>انتخاب برند</p>
      </div>
      <div className={`${styles.brand} ${hide_brand}`}>
        <form className={styles.search_form}>
          <button type="submit">
            <BsSearch fontWeight={900} fontSize={20} />
          </button>
          <input
            className={styles.input}
            type="text"
            placeholder="جست‌وجوی برند"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <div className={`${styles.brand_names} : ${completedClass}`}>
          {data.map((item) => {
            return (
              <div className={styles.brand_name}>
                <span>{item.nameFa}</span>
                <span>{item.nameEn}</span>
              </div>
            );
          })}
        </div>
        <div
          className={`${styles.bottom_title} ${rotate_bottom_title}`}
          onClick={() => setHide(!hide)}
        >
          <h3>نمایش سایر برندها</h3>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Brands;
