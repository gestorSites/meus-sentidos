import { useState } from "react"
import clsx from "clsx"
import { ChevronDown } from "lucide-react"

type Props = {
  title: string
  children: React.ReactNode
}

export default function Accordion({ title, children }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition"
      >
        <span className="font-medium text-gray-800">
          {title}
        </span>

        <span
          className={clsx(
            "transform transition-transform duration-300",
            open ? "rotate-180" : "rotate-0"
          )}
        >
          <ChevronDown size={20} className="text-blue-600" />
        </span>
      </button>

      <div
        className={clsx(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden px-6 pb-4 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  )
}
