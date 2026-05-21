import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5516992832613"
            target="_blank"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
        >
            <MessageCircle />
        </a>
    )
}
