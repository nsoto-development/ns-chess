import { ReactNode, ChangeEventHandler } from "react";

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export function Input(props: InputProps): JSX.Element;
