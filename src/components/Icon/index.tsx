import classNames from 'classnames';

import { registry } from './registry';

type IconVariant = keyof typeof registry;

interface Props {
  variant: IconVariant;
  className?: string;
  theme?: any;
}

export function getIcon(variant: IconVariant) {
  return registry[variant];
}

export const Icon: React.FC<Props> = ({ theme, className, variant, ...props }) => {
  if (!variant) {
    return null;
  }

  const { component: IconComponent } = registry[variant] ?? {};

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={classNames(className, theme?.root)}
      role="img"
      {...props}
    />
  );
};

export default Icon;
