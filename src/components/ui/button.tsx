// src/components/ui/button.tsx 
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-medium rounded-xl transition-all duration-300 transform",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105 rounded-xl transition-all duration-300 transform",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-soft rounded-xl transition-all duration-300 transform",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 hover:shadow-soft rounded-xl transition-all duration-300 transform",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-110 rounded-xl transition-all duration-300 transform",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 transition-all duration-300 transform",
        hero: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-glow hover:scale-110 hover:-translate-y-1 rounded-xl transition-all duration-300 font-semibold transform",
        elegant: "bg-surface text-surface-foreground hover:bg-surface/80 shadow-soft hover:shadow-medium hover:scale-105 hover:-translate-y-1 rounded-xl transition-all duration-300 border border-border/50 transform",
        cta: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-medium hover:shadow-large hover:scale-110 hover:-translate-y-1 rounded-xl transition-all duration-300 font-semibold transform",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
