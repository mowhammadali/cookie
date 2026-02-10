"use client";

import { type ReactNode } from "react";
import styles from "./error.module.css";
import Link from "next/link";
import Button from "@/components/shared/button/button.component";

type ErrorType = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: ErrorType): ReactNode {
  return (
    <div className={styles.error}>
      <p>Something went wrong!</p>
      <div className={styles.actions}>
        <Button variant="primary">
          <Link href="/">Go to home</Link>
        </Button>
        <Button variant="primary" onClick={() => reset()}>
          Retry
        </Button>
      </div>
    </div>
  );
}
