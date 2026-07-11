import type { CSSProperties } from 'react';
import { Button as DSButton } from '@ds/components/core/Button.jsx';
import type { ButtonProps as DSButtonProps } from '@ds/components/core/Button';

export type ButtonProps = DSButtonProps & {
  style?: CSSProperties;
  'aria-label'?: string;
};

export function Button(props: ButtonProps) {
  return <DSButton {...props} />;
}
