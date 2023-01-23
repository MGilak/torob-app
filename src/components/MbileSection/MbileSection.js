import React from "react";
import Navigation from "./../Navigation/Navigation";
import Sidbar from "./sidebar/Sidbar";
import styles from "./MbileSection.module.css";
import Mobiles from "./mobiles/Mobiles";

const MbileSection = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.body}>
        <Sidbar className={styles.sidebar} />
        <Mobiles />
      </div>
    </div>
  );
};

export default MbileSection;
