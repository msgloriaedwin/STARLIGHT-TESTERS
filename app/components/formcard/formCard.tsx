import { Card } from "@/components/ui/card";
import React from "react";

const FormCard = ({
  children,
  variant = "primary",
  size = "lg",
}: {
  children: React.ReactNode;
  variant?: string;
  size?: string;
}) => {
  const bgColors: { [key: string]: string } = {
    primary: "bg-[#FAFAFA]",
    secondary: "bg-[#ACE8FF]",
  };

  const sizes: { [key: string]: string } = {
    md: "p-6 p-4 md:max-w-[600px] sm:max-w-[382px] max-w-[310px]",
    lg: "p-8 p-7 md:max-w-[415px] sm:max-w-[350px] max-w-[300px]",
  };

  const cardVariant = bgColors[variant] || bgColors.primary;
  const cardSize = sizes[size] || sizes.md;

  const cardClasses = `
    rounded-[10px] w-full 
    shadow-[2px_2px_0px_0px_rgba(255,_255,_255,_0.40)_inset,_-4px_-4px_0px_0px_rgba(0,_0,_0,_0.32)_inset] 
    ${cardVariant} 
    ${cardSize}
  `;

  return <Card className={cardClasses}>{children}</Card>;
};

export default FormCard;
