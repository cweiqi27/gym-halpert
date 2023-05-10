import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./root.module.scss";
import Toast from "../features/toast/Toast";
import Sidebar from "../features/ui/Sidebar";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const Root = () => {
  return (
    <>
      <SignedIn>
        <Sidebar />
        <div className={styles.container}>
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
