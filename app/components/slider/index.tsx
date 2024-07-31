"use client";
import React, { useState, useCallback, useMemo } from "react";
import { Slider } from "@/components/ui/slider"; // Assuming this is a custom Slider component

interface ToggleableSliderProps {
  mode: "volume" | "level";
  initialValue?: number[];
  max?: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
  label?: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  theme?: {
    labelColor?: string;
    valueColor?: string;
  };
}

const RBCustomSlider = ({
  mode,
  initialValue = [50],
  max = 100,
  step,
  onValueChange,
  label,
  className,
  labelClassName,
  valueClassName,
  theme = {
    labelColor: "#00222E",
    valueColor: "#00222E",
  },
}: ToggleableSliderProps) => {
  const [value, setValue] = useState<number[]>(initialValue);

  const handleValueChange = useCallback(
    (newValue: number[]) => {
      setValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
    },
    [onValueChange]
  );

  const getLabel = useMemo(() => {
    if (mode === "volume") {
      return `${value[0]}%`;
    }

    if (value[0] < 33) {
      return "Easy";
    } else if (value[0] < 66) {
      return "Medium";
    } else {
      return "Hard";
    }
  }, [mode, value]);

  const handleLevelClick = useCallback((level: "Easy" | "Medium" | "Hard") => {
    switch (level) {
      case "Easy":
        setValue([0]);
        break;
      case "Medium":
        setValue([50]);
        break;
      case "Hard":
        setValue([100]);
        break;
    }
  }, []);

  return (
    <div className={`p-4 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <label
          className={`font-semibold text-base ${labelClassName}`}
          style={{ color: theme?.labelColor }}
        >
          {label || (mode === "volume" ? "Music Volume" : "Choose Level")}
        </label>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-grow">
          <Slider
            value={value}
            onValueChange={handleValueChange}
            max={max}
            step={step || (mode === "level" ? 50 : 1)}
            className="flex-grow"
          />
          {mode === "level" && (
            <div
              className="absolute top-6 w-full flex justify-between text-sm font-medium"
              style={{ color: theme?.labelColor }}
            >
              <span
                className="cursor-pointer"
                onClick={() => handleLevelClick("Easy")}
              >
                Easy
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleLevelClick("Medium")}
              >
                Medium
              </span>
              <span
                className="cursor-pointer text-right"
                onClick={() => handleLevelClick("Hard")}
              >
                Hard
              </span>
            </div>
          )}
        </div>
        {/* {mode === "volume" && (
          <span
            className={`font-medium text-lg ${valueClassName}`}
            style={{ color: theme?.valueColor }}
          >
            {getLabel}
          </span>
        )} */}
      </div>
    </div>
  );
};

export default React.memo(RBCustomSlider);
