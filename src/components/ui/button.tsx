import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "text-white font-orbitron cursor-pointer transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        outline:
          "border border-white bg-transparent text-white hover:bg-white/20",
        clip_primary:
          "clip-custom bg-primary text-primary-foreground shadow-xs hover:bg-primary/80",
        clip_secondary:
          "clip-custom bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        clip_primary_outline:
          "clip-custom bg-transparent text-primary ",
        clip_secondary_outline:
          "clip-custom bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-6 py-3",
        lg: "px-8 py-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
