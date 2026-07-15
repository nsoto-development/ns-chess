import type { CSSProperties } from 'react';
import { Button as DSButton } from '@nsoto/portfolio-ui';
import type { ButtonProps as DSButtonProps } from '@nsoto/portfolio-ui';

export type ButtonProps = DSButtonProps & {
  style?: CSSProperties;
  'aria-label'?: string;
};

export function Button(props: ButtonProps) {
  return <DSButton {...props} />;
}
