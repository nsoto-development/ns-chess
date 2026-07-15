import type { CSSProperties } from 'react';
import { Badge as DSBadge } from '@nsoto/portfolio-ui';
import type { BadgeProps as DSBadgeProps } from '@nsoto/portfolio-ui';

export type BadgeProps = DSBadgeProps & {
  style?: CSSProperties;
};

export function Badge(props: BadgeProps) {
  return <DSBadge {...props} />;
}
