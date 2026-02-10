import React, { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
  className?: string;
  fill?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant, loading = false, disabled, className, fill, ...rest },
    ref,
  ): React.JSX.Element => {
    return (
      <button
        className={clsx(
          styles.button,
          !!variant && styles[variant],
          !!fill && styles.fill,
          className,
        )}
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
