import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function NavigateButton() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex ml-6 items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
    >
      <ChevronLeft size={18} />
      Voltar
    </button>
  )
}