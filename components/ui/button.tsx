import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full px-4 py-2 rounded-lg font-medium text-white transition",
        variant === "primary" ? "bg-orange-500 hover:bg-orange-600" : "bg-maroon hover:bg-orange-700",
        className
      )}
      {...props}
    />
  )
}
