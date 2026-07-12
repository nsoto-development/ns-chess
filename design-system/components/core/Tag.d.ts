import { ReactNode, MouseEventHandler } from "react";

export interface TagProps {
  children: ReactNode;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  onRemove?: () => void;
}

export function Tag(props: TagProps): JSX.Element;
