import { ReactNode, MouseEventHandler } from "react";

export interface IconButtonProps {
  icon: ReactNode;
  /** Accessible label, also shown as title tooltip. */
  label: string;
  variant?: "ghost" | "solid";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function IconButton(props: IconButtonProps): JSX.Element;
