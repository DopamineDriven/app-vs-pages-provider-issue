'use client'

import { Icon, SocialIcon } from "../registry"
import styles from './styles.module.css'

const SimpleClientComponent: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>This is a CLIENT component. CLS there.</h1>
      <p>Refresh the page with DISABLE CACHE (in dev tools) to see the issue</p>


      <div className={styles.iconsWrapper}>
        <Icon variant="Facebook" className={styles.icon} />

        <Icon variant='Download' className={styles.icon} />

        <SocialIcon variant="Close" />
      </div>
    </div>
  )
}

export default SimpleClientComponent