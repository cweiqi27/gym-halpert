import { Outlet } from "react-router-dom";
import styles from "./Root.module.scss";
import Toast from "../features/toast/Toast";
import Sidebar from "../features/ui/Sidebar";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Button from "../features/ui/Button";

const Root = () => {
  return (
    <>
      <SignedIn>
        <Sidebar />
        <div className={styles.container}>
          <Button color="primary" title="somehting" />
          <Outlet />
          <Toast />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Root;
