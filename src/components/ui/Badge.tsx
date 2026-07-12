import type { CSSProperties } from 'react';
import { Badge as DSBadge } from '@ds/components/core/Badge.jsx';
import type { BadgeProps as DSBadgeProps } from '@ds/components/core/Badge';

export type BadgeProps = DSBadgeProps & {
  style?: CSSProperties;
};

export function Badge(props: BadgeProps) {
  return <DSBadge {...props} />;
}
