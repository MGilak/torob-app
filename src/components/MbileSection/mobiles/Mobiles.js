import React from "react";
import styles from "./Mobiles.module.css";
import Header from "./header/Header";
import Container from "./container/Container";

const Mobiles = () => {
  return (
    <div className={styles.mobiles}>
      <div className={styles.mobiles_container}>
        <Header />
        <Container />
      </div>
    </div>
  );
};

export default Mobiles;
