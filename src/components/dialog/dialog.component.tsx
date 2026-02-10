"use client";

import {
  type ReactNode,
  type MouseEvent,
  useEffect,
  useRef,
  type PropsWithChildren,
} from "react";
import { useModalStore } from "@/stores/useModalStore";
import styles from "./dialog.module.css";

export default function Dialog({ children }: PropsWithChildren): ReactNode {
  const { isOpen, close } = useModalStore((state) => state);

  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return (): void => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: MouseEvent): void => {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      close();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.dialog} ref={dialogRef}>
        {children}
      </div>
    </div>
  );
}
