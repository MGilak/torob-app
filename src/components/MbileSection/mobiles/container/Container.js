import React from "react";
import styles from "./Container.module.css";
import { IoHeartOutline, IoOpenOutline } from "react-icons/io5";
import { data } from "./../../../../mobiles_data";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Container = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className={styles.container_title}>قیمت انواع گوشی موبایل</h2>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div className={styles.container_item}>
              <div className={styles.container_item_up}>
                <div className={styles.image}>
                  <img src={item.img} alt="phone" />
                </div>
                <p className={styles.container_item_name}>{item.name}</p>
              </div>
              <div className={styles.container_item_bottom}>
                <div className={styles.container_item_price}>{item.price}</div>
                <div className={styles.container_store}>{item.store}</div>
                <div className={styles.container_like}>
                  <IoHeartOutline />
                  <Link to="/mobile">
                    <IoOpenOutline
                      onClick={() =>
                        dispatch({ type: "SHOW_MOBILE", payload: item })
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
