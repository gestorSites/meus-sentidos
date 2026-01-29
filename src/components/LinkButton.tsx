import clsx from "clsx"
import type { ReactNode } from "react"

type Props = {
  label: string
  href: string
  icon?: ReactNode
  variant?: "primary" | "secondary" | "outline"
}

export default function LinkButton({
  label,
  href,
  icon,
  variant = "primary",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        "w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full font-medium",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-md active:translate-y-0",
        {
          "bg-sky-600 text-white hover:bg-sky-700":
            variant === "primary",

          "bg-violet-400 text-sky-900 hover:bg-violet-500":
            variant === "secondary",

          "border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white":
            variant === "outline",
        }
      )}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{label}</span>
    </a>
  )
}
