import { FC } from "react";
import { Icon } from "../registry";
import styles from "./styles.module.css";

export const RscWorkup: FC = () => {
  return (
    <>
      <Icon variant='Facebook' className={styles.icon} />
      <Icon variant='Download' className={styles.icon} />
    </>
  );
};
