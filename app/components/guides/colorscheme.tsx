"use client";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
type ColorValue = string;
type ColorGroup = {
  [key: string]: ColorValue | ColorGroup;
};
const colors: ColorGroup = {
  primary: {
    DEFAULT: "#FFFAD9",
    50: "#F1FBFF",
    100: "#D5F3FF",
    200: "#ACE8FF",
    400: "#58D1FF",
    blue: "#00A8E8",
    500: "#00A8E8",
    600: "#0086BA",
    700: "#00658B",
    800: "#00435D",
    900: "#00222E",
    C600: "#FF0057",
    B900: "#332C00",
    pink: "#FF4081",
    yellow: {
      DEFAULT: "#FFDD00",
      300: "#FFF08C",
      400: "#FFEB66",
      800: "#665800",
      900: "#332C00",
    },
  },
  secondary: {
    orange: "#FF5722",
    green: "#4CAF50",
    B400: "#FF9A7A",
  },
  neutral: {
    500: "#9F9F9F",
    600: "#7F7F7F",
    800: "#404040",
    900: "#202020",
  },
};

const ColorScheme: React.FC = () => {
  const { toast } = useToast();
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Scheduled: Catch up",
      description: `Copied class ${text} to clipboard`,
    });
  };

  const renderColors = (colorObj: any, prefix: string = ""): any => {
    return Object.entries(colorObj).map(([key, value]) => {
      if (typeof value === "string") {
        const className =
          key === "DEFAULT" ? `${prefix.slice(0, -1)}` : `${prefix}${key}`;
        const isDark = key.match(/(600|700|800|900|C600|B900| )/);
        return (
          <div
            key={className}
            className={`flex items-center space-x-2 cursor-pointer p-2 rounded-md ${
              isDark ? "text-white" : "text-black"
            }`}
            onClick={() => copyToClipboard(`bg-${className}`)}
          >
            <div
              className="w-full flex items-center justify-center rounded-md p-5"
              style={{ backgroundColor: value }}
            >
              {`bg-${className}`}
            </div>
          </div>
        );
      }
      const nestedPrefix = key.match(/\d/)
        ? `${prefix}${key}-`
        : `${prefix}${key}-`;
      return renderColors(value, nestedPrefix);
    });
  };

  return (
    <>
      <div className="space-y-4 py-4 w-full items-center justify-center whitespace-nowrap rounded-lg">
        {Object.entries(colors).map(([category, colorObj]) => (
          <div key={category}>
            <h2 className="text-lg font-semibold capitalize">{category}</h2>
            <div className="grid smgrid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {renderColors(colorObj, `${category}-`)}
            </div>
          </div>
        ))}

        <h2 className="text-lg font-semibold capitalize">Error</h2>
        <div
          className={`flex items-center space-x-2 cursor-pointer rounded-md p-5 bg-error text-white`}
          onClick={() => copyToClipboard(`bg-error`)}
        >
          bg-error
        </div>
      </div>
    </>
  );
};

export default ColorScheme;
