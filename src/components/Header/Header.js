import React, { useState } from "react";
import style from "./header.module.css";
import OtherMenu from "./../Other_menu/OtherMenu";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const showMenu = () => {
    setIsShow(!isShow);
  };
  return (
    <div className={style.header}>
      <div className={style.header_left}>
        <ul>
          <li onClick={showMenu}>موبایل و کالای دیجیتال</li>
          {isShow && (
            <div className={style.megaMenu}>
              <OtherMenu open={isShow} />
            </div>
          )}
          <li>لپ‌تاپ، کامپیوتر، اداری</li>
          <li>هایپر مارکت</li>
          <li>لوازم خانگی</li>
          <li>مد و پوشاک</li>
          <li>زیبایی و بهداشت</li>
          <li>صوتی و تصویری</li>
          <li>سایر دسته‌ها</li>
        </ul>
      </div>
      <div className={style.header_right}>
        <button>ورود / ثبت‌نام</button>
      </div>
    </div>
  );
};

export default Header;
