import { useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const phone = "5516992832613" // troque pelo número real (DDD + número)

    const text = `
Olá! Gostaria de entrar em contato

*Nome:* ${name}
*E-mail:* ${email}

*Mensagem:*
${message}
    `

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      text
    )}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg space-y-4"
    >
      <div>
        <label className="text-sm text-gray-600">Nome</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">E-mail</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Mensagem</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Como podemos ajudar?"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Enviar pelo WhatsApp
      </button>
    </form>
  )
}
