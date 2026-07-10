import { ReactNode, MouseEventHandler, CSSProperties } from "react";

export interface CardProps {
  children: ReactNode;
  /** Enables hover lift + brand border + glow. Default false. */
  interactive?: boolean;
  padding?: CSSProperties["padding"];
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function Card(props: CardProps): JSX.Element;
