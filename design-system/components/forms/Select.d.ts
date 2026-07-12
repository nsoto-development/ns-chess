import { ChangeEventHandler } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options: SelectOption[];
  disabled?: boolean;
}

export function Select(props: SelectProps): JSX.Element;
