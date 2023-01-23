import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <ul>
        <li>راهنمای خرید امن</li>
        <li>پیگیری سفارش</li>
        <li> تماس با ما</li>
        <li>دربارۀ ترب</li>
        <li>تخفیف‌ها</li>
      </ul>

      <ul className={style.footer_left}>
        <li> فرصت‌های شغلی</li>
        <li>پنل فروشگاه‌ها</li>
        <li>ثبت‌نام‌ فروشگاه‌ها</li>
        <li>لیست فروشگاه‌ها</li>
      </ul>
    </div>
  );
};

export default Footer;
