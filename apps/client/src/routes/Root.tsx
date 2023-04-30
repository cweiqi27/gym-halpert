import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./Root.module.scss";

const Root = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
