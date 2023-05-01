import { NavLink } from "react-router-dom";
import LogoLink from "./LogoLink";
import styles from "./Sidebar.module.scss";
import { IconBarbell, IconHistory } from "@tabler/icons-react";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.inner}>
        <LogoLink />
        <ul>
          <li>
            <NavLink
              to="workout"
              className={({ isActive, isPending }) =>
                isActive ? styles.linkBtnActive : styles.linkBtn
              }
            >
              <IconBarbell />
              Workout
            </NavLink>
          </li>
          <li>
            <NavLink
              to="history"
              className={({ isActive, isPending }) =>
                isActive ? styles.linkBtnActive : styles.linkBtn
              }
            >
              <IconHistory />
              History
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
