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
      rel="noopener noreferrer"
      className={clsx(
        `
          w-full h-14
          flex items-center justify-center gap-3
          rounded-xl
          font-medium
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
        `,
        {
          // BOTÃO PRINCIPAL
          "bg-[#1177E3] text-white hover:bg-[#1177E3]/90 shadow-sm":
            variant === "primary",

          // BOTÃO DE DESTAQUE SUAVE
          "bg-[#5E3583] text-white hover:bg-[#5E3583]/90 shadow-sm":
            variant === "secondary",

          // BOTÃO NEUTRO (bio.site style)
          "border border-gray-200 text-gray-700 hover:bg-gray-50":
            variant === "outline",
        }
      )}
    >
      {icon && (
        <span className="flex items-center text-current">
          {icon}
        </span>
      )}
      <span>{label}</span>
    </a >
  )
}
