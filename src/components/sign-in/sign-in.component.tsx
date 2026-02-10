"use client";

import { type ReactNode } from "react";
import styles from "./sign-in.module.css";
import Image from "next/image";
import logoImage from "@/assets/images/cookie-32x32.png";
import MingcuteUser2Fill from "@/icons/MingcuteUser2Fill";
import MaterialSymbolsLockOpen from "@/icons/MaterialSymbolsLockOpen";
import Button from "@/components/shared/button/button.component";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function SignIn(): ReactNode {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleSubmitFrom = async function (data: FormData): Promise<void> {
    console.log(data);
  };

  return (
    <div className={styles["sign-in"]}>
      <section className={styles["logo-section"]}>
        <p>Cookie</p>
        <Image src={logoImage} alt="logo" />
      </section>
      <form onSubmit={handleSubmit(handleSubmitFrom)}>
        <section className={styles["field-wrapper"]}>
          <MingcuteUser2Fill className={styles["field-icon"]} />
          <input
            type="text"
            className={styles.field}
            placeholder="Username..."
            disabled={isSubmitting}
            {...register("username")}
          />
          {errors.username && (
            <div className={styles["error-message"]}>
              {errors.username.message}
            </div>
          )}
        </section>
        <section className={styles["field-wrapper"]}>
          <MaterialSymbolsLockOpen className={styles["field-icon"]} />
          <input
            type="text"
            className={styles.field}
            placeholder="Password..."
            disabled={isSubmitting}
            {...register("password")}
          />
          {errors.password && (
            <div className={styles["error-message"]}>
              {errors.password.message}
            </div>
          )}
        </section>
        <Button
          fill={true}
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
