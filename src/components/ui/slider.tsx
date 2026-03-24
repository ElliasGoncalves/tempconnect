import * as React from "react";

type SliderProps = {
  value?: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
  className?: string;
};

export function Slider({
  value = [50],
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  className = "",
}: SliderProps) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange?.([Number(e.target.value)])}
      className={`w-full ${className}`}
    />
  );
}

export default Slider;