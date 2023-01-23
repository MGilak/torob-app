import React, { useState } from "react";
import styles from "./Body.module.css";
import {
  IoNotificationsOutline,
  IoHeartOutline,
  IoShareSocialOutline,
  IoFlagOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";

const Body = () => {
  const [showBasket, setShowBasket] = useState(true);
  const [addMobile, setAddMobile] = useState(false);

  const data = useSelector((state) => state);
  console.log(data);
  const add = addMobile && styles.add;

  return (
    <div className={styles.body}>
      <div className={styles.body_right}>
        <div className={styles.body_right_image}>
          <img src={data.img} alt="mobile" />
        </div>
        <div className={styles.body_right_detail}>
          <p className={styles.body_right_title}>{data.name}</p>
          <p className={styles.body_right_price}>
            {data.price} تا ۵٫۵۰۰٫۰۰۰ تومان
          </p>
          <div className={styles.body_right_ranges}>
            <div className={styles.body_right_range}>
              <span>64 GB - 4 GB</span>
              <span>از ۴٫۱۶۰٫۰۰۰ تومان</span>
            </div>
            <div className={styles.body_right_range}>
              <span>64 GB - 4 GB</span>
              <span>از ۴٫۱۶۰٫۰۰۰ تومان</span>
            </div>
            <div className={styles.body_right_range}>
              <span>64 GB - 4 GB</span>
              <span>از ۴٫۱۶۰٫۰۰۰ تومان</span>
            </div>
          </div>
          <div className={styles.body_right_footer}>
            <button>خرید از ارزان‌ترین فروشنده رجیسترشده</button>
            <div className={styles.body_right_footer_icons}>
              <IoNotificationsOutline />
              <IoHeartOutline
                onMouseEnter={() => setShowBasket(false)}
                onMouseLeave={() => setShowBasket(!addMobile)}
                onClick={() => {
                  setAddMobile(!addMobile);
                }}
                className={add}
              />
              {showBasket && (
                <div className={styles.body_right_footer_basket}>
                  اضافه به سبد خرید
                </div>
              )}
              <IoShareSocialOutline />
            </div>
            <div className={styles.report}>
              <IoFlagOutline />
              <p>گزارش</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body_left}>
        <img src="./images/chart.PNG" alt="chart" />
      </div>
    </div>
  );
};

export default Body;
