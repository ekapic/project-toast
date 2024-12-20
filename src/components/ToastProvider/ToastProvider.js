import React, { useState } from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [stack, setStack] = useState([]);

  function addToast(message, variant) {
    setStack([
      ...stack,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }

  function removeToast(id) {
    const newStack = stack.filter((i) => i.id !== id);
    setStack(newStack);
  }

  useEscapeKey(() => {
    setStack([]);
  });

  return (
    <ToastContext.Provider value={{ stack, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
