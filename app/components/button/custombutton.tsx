"use client";
import { LoaderCircle, Plus } from "lucide-react";
import Link from "next/link";
import {
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  MouseEventHandler,
} from "react";
import { Button } from "@/components/ui/button";

type Variant =
  | "default"
  | "primary"
  | "destructive"
  | "subtle"
  | "loading"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
type Size = "default" | "sm" | "lg" | "link" | "icon" | "circle";

interface ButtonProperties {
  type?: "submit" | "button" | "reset";
  variant?: Variant | any;
  size?: Size | any;
  icon?: ReactNode;
  children?: ReactNode;
  isLoading?: boolean;
  isIconOnly?: boolean;
  isLeftIconVisible?: boolean;
  isRightIconVisible?: boolean;
  isDisabled?: boolean;
  ariaLabel?: string;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: FC<ButtonProperties> = ({
  type = "button",
  variant,
  size,
  children,
  isLoading = false,
  isLeftIconVisible = false,
  isRightIconVisible = false,
  icon,
  isDisabled = false,
  isIconOnly = false,
  ariaLabel,
  href,
  className,
  onClick,
}) => {
  const renderIcon = (iconElement: ReactNode, testId: string) =>
    iconElement ? (
      cloneElement(iconElement as ReactElement, {
        className: "w-[1rem] h-[1rem]",
        "data-testid": testId,
      })
    ) : (
      <Plus className="h-[1rem] w-[1rem]" data-testid={testId} />
    );

  const renderButtonContent = () => (
    <>
      {isLeftIconVisible && !isLoading && renderIcon(icon, "left-icon")}
      {isLoading && (
        <LoaderCircle
          className="h-[1rem] w-[1rem] animate-spin"
          data-testid="loading-spinner"
        />
      )}
      {isIconOnly && !isLoading && renderIcon(icon, "icon-only")}
      {!isIconOnly && children}
      {!isIconOnly && !children && isLoading && "Loading"}
      {isRightIconVisible && !isLoading && renderIcon(icon, "right-icon")}
    </>
  );

  const button = (
    <Button
      type={type}
      variant={variant}
      size={size}
      disabled={isDisabled}
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
      role="button"
    >
      {renderButtonContent()}
    </Button>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {button}
        </a>
      );
    }
    return (
      <Link href={href} passHref aria-label={ariaLabel}>
        {button}
      </Link>
    );
  }

  return button;
};

export default CustomButton;
