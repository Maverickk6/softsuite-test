import styles from "./header.module.scss";
import { assets } from "../../constants";

const Header = () => {
  return (
    <header className={styles.mainContainer}>
      <div>
        <img src={assets.Logo} alt="logo" />
      </div>
      <div className={styles.middleDiv}>
        <div className={styles.midDesc}>
          <img className={styles.homeImg} src={assets.Home} />
          <div className={styles.midp}>
            <p className={styles.midp1}>Change Organization</p>
            <p className={styles.midp2}>PaperSoft Limited</p>
          </div>
          <img className={styles.arrowImg} src={assets.ArrowDown} />
        </div>
        <div className={styles.inputDiv}>
          <input type="text" placeholder="Search For Anything..." />
          <div className={styles.inputContainer}>
            <img src={assets.Search} />
          </div>
        </div>
      </div>
      <div className={styles.div3}>
        <img src={assets.Notification} />
        <div className={styles.profileName}>
          <img className={styles.div3img} src={assets.UserImg} />
          <div className={styles.dropdown}>
            <p className={styles.dropdownp1}>Henry Okoro</p>
            <p className={styles.dropdownp2}>Payroll Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
