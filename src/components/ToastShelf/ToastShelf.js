import React, { useContext } from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { stack, removeToast } = useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {stack.map((i) => (
        <li className={styles.toastWrapper} key={i.id}>
          <Toast variant={i.variant} onDismissToast={() => removeToast(i.id)}>
            {i.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
