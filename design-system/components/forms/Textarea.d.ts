import { ChangeEventHandler } from "react";

export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  error?: string;
  disabled?: boolean;
}

export function Textarea(props: TextareaProps): JSX.Element;
