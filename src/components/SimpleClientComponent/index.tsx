'use client'
import { IconBase} from "../Icon/IconBase";
import { SocialIcon } from "../Icon/SocialIcon";
import styles from './styles.module.css'

const SimpleClientComponent: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>This is a CLIENT component. CLS there.</h1>
      <p>Refresh the page with DISABLE CACHE (in dev tools) to see the issue</p>
      <div className={styles.iconsWrapper}>
        <IconBase variant="Facebook" className={styles.icon} />
        <IconBase variant="Download" className={styles.icon} />
        <SocialIcon variant="Close" />
      </div>
    </div>
  )
}

export default SimpleClientComponent