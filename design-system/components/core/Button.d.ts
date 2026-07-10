import { ReactNode, MouseEventHandler } from "react";

export interface ButtonProps {
  children: ReactNode;
  /** Visual style. Default "primary". */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Default "md". */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export function Button(props: ButtonProps): JSX.Element;
