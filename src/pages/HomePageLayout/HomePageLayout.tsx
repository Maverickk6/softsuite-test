import React from "react";
import Header from "../../components/header/Header";
import styles from "./HomePageLayout.module.scss";
import SideBar from "../../components/Sidebar/SideBar";

const HomePageLayout = () => {
  return (
    <div className={styles.mainCOntainer}>
      <Header />
      <div className={styles.body}>
        {/* <div className={styles.sidebar}> */}
        <SideBar />
        {/* </div> */}
        <div className={styles.inner}>
          {/* <UsersComponent />
          <TableDetails /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePageLayout;
