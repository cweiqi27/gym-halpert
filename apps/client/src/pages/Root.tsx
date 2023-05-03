import { Outlet } from "react-router-dom";
import styles from "./Root.module.scss";
import Toast from "../features/toast/Toast";
import Sidebar from "../features/ui/Sidebar";

const Root = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.container}>
        <Outlet />
        <Toast />
      </div>
    </>
  );
};

export default Root;
