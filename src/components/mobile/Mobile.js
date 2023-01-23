import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Body from "../../components/mobile/body/Body";
import styles from "./Mobile.module.css";
import Title from "../../components/mobile/title/Title";

const Mobile = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.mobile}>
        <Title />
        <Body />
      </div>
    </div>
  );
};

export default Mobile;
