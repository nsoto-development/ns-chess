export interface AvatarProps {
  src?: string;
  alt?: string;
  /** Fallback initials shown when no src. Default "NS". */
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /** Brand-colored ring, e.g. for "currently available" state. */
  ring?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element;
