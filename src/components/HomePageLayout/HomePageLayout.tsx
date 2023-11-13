import React from "react";
import Header from "../../components/header/Header";
import styles from "./HomePageLayout.module.scss";
import SideBar from "../../components/Sidebar/SideBar";

interface Props {
  children: React.ReactNode;
}

const HomePageLayout = (props: Props) => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.body}>
        {/* <div className={styles.sidebar}> */}
        <SideBar />
        {/* </div> */}
        <div className={styles.inner}>{props.children}</div>
      </div>
    </div>
  );
};

export default HomePageLayout;
