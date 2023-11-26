import React from "react";
import styles from "./Elements.module.scss";
import { assets } from "../../constants";

const Elements: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <p>Elements</p>
      <div className={styles.inputD}>
        <div className={styles.inputDiv}>
          <input type="text" placeholder="Search For element" />
          <div className={styles.inputContainer}>
            <img src={assets.Search} />
          </div>
          <div className={styles.filterdiv}>
          <img src={assets.FilterIcon} />
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Elements;
