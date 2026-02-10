import { type ReactNode } from "react";
import styles from "./skeleton.module.css";
import clsx from "clsx";

type PropsType = {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  borderRadius?: string;
  className?: string;
};

export default function Skeleton({
  circle = false,
  borderRadius,
  className,
  width = "100%",
  height = "1rem",
}: PropsType): ReactNode {
  return (
    <div
      className={clsx(styles.skeleton, className)}
      style={{
        width,
        height,
        borderRadius: circle ? "50%" : borderRadius || "0.5rem",
      }}
    ></div>
  );
}
