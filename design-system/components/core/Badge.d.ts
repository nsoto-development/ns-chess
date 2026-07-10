import { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  tone?: "brand" | "neutral" | "success" | "warning" | "danger";
  /** Show a small status dot before the label. */
  dot?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
