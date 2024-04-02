"use client";

import type { FC, ReactNode } from "react";
import { SocialIcon } from "../registry";
import styles from "./styles.module.css";

const SimpleClientComponent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>This is a CLIENT component. CLS there.</h1>
      <p>Refresh the page with DISABLE CACHE (in dev tools) to see the issue</p>

      <div className={styles.iconsWrapper}>
        {children}
        <SocialIcon variant='Close' />
      </div>
    </div>
  );
};

export default SimpleClientComponent;
