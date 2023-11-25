import React from "react";
import HomePageLayout from "../../components/HomePageLayout/HomePageLayout";
import styles from "./ElementPage.module.scss";
import ElementHeader from "../../components/elementPageHeader/ElementHeader";

function ElementPage() {
  return (
    <HomePageLayout>
      <div className={styles.mainContainer}>
        <ElementHeader />
      </div>
    </HomePageLayout>
  );
}

export default ElementPage;
