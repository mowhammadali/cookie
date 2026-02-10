import React, { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant, loading = false, disabled, className, ...rest },
    ref,
  ): React.JSX.Element => {
    return (
      <button
        className={clsx(styles.button, !!variant && styles[variant], className)}
        ref={ref}
        disabled={disabled || loading}
        {...rest}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
