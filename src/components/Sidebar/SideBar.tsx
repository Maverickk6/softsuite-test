import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { assets } from "../../constants";

const SideBar: React.FC = () => {
  const [sideTabOneShow, setSideTabOne] = useState<boolean>(false);
  const [isSelected] = useState<boolean>(true);
  const [showElements, setShowElements] = useState<boolean>(false);
  return (
    <div className={styles.mainContainer2}>
      <div className={styles.top}>
        <div
          className={styles.topHiddenElemTab}
          onClick={() => setSideTabOne(!sideTabOneShow)}
        >
          <div className={styles.top1}>
            <img className={styles.top11img} src={assets.SwitchIcon} />

            <div className={styles.topDivP}>
              <p className={styles.p1}>Switch Module</p>
              <p className={styles.p2}>Payroll Management</p>
            </div>
            <img
              className={styles.top12img}
              src={assets.ArrowDown}
              alt="down-arrow"
            />
          </div>
          {sideTabOneShow && (
            <div className={styles.hiddenTab1}>
              <div className={styles.tab1p}>
                <div className={styles.imgDiv}>
                  {!isSelected && <img src={assets.TickIcon} />}
                </div>
                <p>System Administration</p>
              </div>
              <div className={styles.tab1p}>
                <div className={styles.imgDiv}>
                  {isSelected && <img src={assets.TickIcon} />}
                </div>
                <p>People Management</p>
              </div>
              <div className={styles.tab1p}>
                <div className={styles.imgDiv}>
                  {!isSelected && <img src={assets.TickIcon} />}
                </div>
                <p>Payroll Management</p>
              </div>
              <div className={styles.tab1p}>
                <div className={styles.imgDiv}>
                  {!isSelected && <img src={assets.TickIcon} />}
                </div>
                <p>Self Service</p>
              </div>
            </div>
          )}
        </div>
        <div className={styles.tab2}>
          <img src={assets.DashboardIcon} />
          <p>Dashboard</p>
        </div>
        <div className={styles.tab3}>
          <img className={styles.img1} src={assets.Payroll} />
          <p>Payroll Activities</p>
          <img className={styles.img2} src={assets.ArrowDown} />
        </div>
        <div className={styles.tab4}>
          <img src={assets.Salary} />
          <p>Salary Structure</p>
        </div>
        <div className={styles.hiddentab2}>
          <div
            className={styles.tab5}
            onClick={() => setShowElements(!showElements)}
          >
            <img className={styles.img1} src={assets.Settings} />
            <p>Element Setup</p>
            <img className={styles.img2} src={assets.ArrowDown} />
          </div>
          {showElements && (
            <div className={styles.hiddenElementTab2}>
              <div className={styles.tab2p}>
                <p>Elements</p>
              </div>
              <div className={styles.tab2p}>
                <p>Balances</p>
              </div>
            </div>
          )}
        </div>
        <div className={styles.tab4}>
          <img src={assets.Employees} />
          <p>Employees</p>
        </div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default SideBar;
