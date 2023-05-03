import React from "react";
import styles from "./Toast.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment } from "./toastSlice";

type Props = {};

const Toast = (props: Props) => {
  const selector = useAppSelector((state) => state.toast.value);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.toast}>
      {selector}
      <button onClick={() => dispatch(increment())}>click</button>
    </div>
  );
};

export default Toast;
