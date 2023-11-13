import React from "react";
import HomePageLayout from "../../components/HomePageLayout/HomePageLayout";
import styles from "./ElementPage.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setActivePage } from "../../features/activeLinks/activeLinkSlice";

function ElementPage() {
  const dispatch = useDispatch();
  const activePage = useSelector(
    (state: RootState) => state.navigation.activePage
  );
  const handleNavLinkClick = (page: string) => {
    dispatch(setActivePage(page));
  };
  return (
    <HomePageLayout>
      <div className={styles.mainContainer}>
        <nav className={styles.elementHeader}>
          <NavLink
            className={
              `${activePage == "payroll-management"
                ? styles.active
                : styles.inactive
            }`}
            to="/payroll-management"
            onClick={() => handleNavLinkClick("payroll-management")}
          >
            Payroll Management
          </NavLink>
        </nav>
      </div>
    </HomePageLayout>
  );
}

export default ElementPage;
