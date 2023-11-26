import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../app/store";
// import { setActivePage } from "../../features/activeLinks/activeLinkSlice";
import styles from "./ElementHeader.module.scss";
import { assets } from "../../constants";


function ElementHeader() {
//   const dispatch = useDispatch();
//   const activePage = useSelector(
//     (state: RootState) => state.navigation.activePage
//   );
//   const handleNavLinkClick = (page: string) => {
//     dispatch(setActivePage(page));
//   };
  return (
    <nav className={styles.elementHeader}>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            marginRight: "1rem",
            color: isActive ? "#9BA7C4" : "#647EBA",
          };
        }}
      >
        Payroll Management
      </NavLink>
      <div style={{ marginRight: '1rem'}}><img src={assets.ArrowRight}/></div>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            marginRight: "1rem",
            color: isActive ? "#9BA7C4" : "#647EBA",
          };
        }}
      >
        Element Setup
      </NavLink>
      <div style={{ marginRight: '1rem'}}><img src={assets.ArrowRight}/></div>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive ? "#2d416f" : "#647EBA",
          };
        }}
      >
        Elements
      </NavLink>
    </nav>
  );
}

export default ElementHeader;
