'use client';

import classNames from 'classnames';

import { Icon } from '../registry';

import styles from './Social.module.css';

interface Props {
  variant: any;
  theme?: any;
}

export const SocialIcon: React.FC<Props> & { theme: any } = ({ theme = SocialIcon.theme, ...rest}) => {
  return <div className='bg-red-500 w-10 h-10 p-3 rounded-xl'><Icon {...rest} className={classNames(theme?.icon)} /></div>;
}

SocialIcon.theme = styles;

export default SocialIcon;
