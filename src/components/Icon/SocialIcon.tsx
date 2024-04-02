"use client";
import { IconBase, type IconProps, type VariantUnion } from "./IconBase";
import styles from "./socialicon.module.css";
import cn from "classnames";

export const SocialIcon = <K extends VariantUnion>({
  className,
  ...props
}: IconProps<K>) => {
  return (
    <div className='bg-red-500 w-10 h-10 p-3 rounded-xl'>
      <IconBase {...props} className={cn(styles.icon, className)} />
    </div>
  );
};
