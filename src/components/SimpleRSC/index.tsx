import { IconBase } from "../Icon/IconBase";
import { SocialIcon } from "../Icon/SocialIcon";
import styles from "./styles.module.css";

const SimpleRSC: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>This is a RSC. Styles will be applied OK</h1>

      <div className={styles.iconsWrapper}>
        <IconBase variant='Facebook' className={styles.icon} />
        <IconBase variant='Plus' className={styles.icon} />

        <div className='flex gap-4 border border-yellow-400 bg-yellow-50 rounded-xl p-3'>
          <p>Except for this part as this icon is a CLIENT component:</p>
          <SocialIcon variant='Close' />
        </div>
      </div>
    </div>
  );
};

export default SimpleRSC;
