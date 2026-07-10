import { ReactNode, MouseEventHandler } from "react";

export interface NavLinkProps {
  children: ReactNode;
  href?: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function NavLink(props: NavLinkProps): JSX.Element;
