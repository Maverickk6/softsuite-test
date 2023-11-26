import HomePageLayout from "../../components/HomePageLayout/HomePageLayout";
import styles from "./ElementPage.module.scss";
import ElementHeader from "../../components/elementPageHeader/ElementHeader";
import Elements from "../../components/elements/Elements";

function ElementPage() {
  return (
    <HomePageLayout>
      <div className={styles.mainContainer}>
        <ElementHeader />
        <Elements />
      </div>
    </HomePageLayout>
  );
}

export default ElementPage;
