import * as React from "react";

type SwitchProps = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
};

export function Switch({
  checked = false,
  onCheckedChange,
  className = "",
  disabled = false,
}: SwitchProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className={className}
    />
  );
}

export default Switch;