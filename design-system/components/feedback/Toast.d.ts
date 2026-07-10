export interface ToastProps {
  tone?: "info" | "success" | "danger";
  title: string;
  message?: string;
  onDismiss?: () => void;
}

export function Toast(props: ToastProps): JSX.Element;
