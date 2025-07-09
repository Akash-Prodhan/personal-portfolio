"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface ModeToggleProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

export const ModeToggle = React.forwardRef<HTMLButtonElement, ModeToggleProps>(
  ({ className, ...props }, ref) => {
    const { setTheme, theme } = useTheme();

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={className}
        {...props}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }
);

// Add a display name for DevTools & error clarity
ModeToggle.displayName = "ModeToggle";

