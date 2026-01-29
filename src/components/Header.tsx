import { useEffect, useState } from "react"
import clsx from "clsx"
import logoMeusSentidos from "../assets/logoMeusSentidos.jpg"
import { useActiveSection } from "../hooks/useActiveSection"

const sections = ["home", "sobre", "servicos", "faq", "contato"]

const menu = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "FAQ", id: "faq" },
    { label: "Contato", id: "contato" },
]

export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const active = useActiveSection(sections)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={clsx(
                "fixed top-0 w-full z-50 transition-all",
                scrolled
                    ? "bg-white/90 backdrop-blur shadow-sm border-b"
                    : "bg-white/70 backdrop-blur"
            )}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* LOGO */}
                <a
                    href="#home"
                    className="flex items-center gap-3 font-semibold text-blue-900"
                >
                    <img
                        src={logoMeusSentidos}
                        alt="Logo Meus Sentidos"
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                    />
                    Meus Sentidos
                </a>

                {/* MENU DESKTOP */}
                <nav className="hidden md:flex items-center gap-8">
                    {menu.map((item) => {
                        const isActive = active === item.id

                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={clsx(
                                    "relative transition-all duration-200",
                                    isActive
                                        ? "text-blue-600 font-medium"
                                        : "text-gray-700 hover:text-blue-600 hover:-translate-y-0.5"
                                )}
                            >
                                {item.label}

                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                                )}
                            </a>
                        )
                    })}

                    <a
                        href="https://wa.me/55XXXXXXXXX"
                        target="_blank"
                        className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                    >
                        WhatsApp
                    </a>
                </nav>

                {/* HAMBURGER */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col gap-1"
                    aria-label="Abrir menu"
                >
                    <span className="w-6 h-0.5 bg-blue-900" />
                    <span className="w-6 h-0.5 bg-blue-900" />
                    <span className="w-6 h-0.5 bg-blue-900" />
                </button>
            </div>

            {/* MENU MOBILE */}
            <div
                className={clsx(
                    "md:hidden overflow-hidden transition-all duration-300 ease-out",
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <nav className="bg-white border-t px-6 py-4 flex flex-col gap-4">
                    {menu.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setOpen(false)}
                            className={clsx(
                                "font-medium transition",
                                active === item.id
                                    ? "text-blue-600"
                                    : "text-gray-700"
                            )}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="https://wa.me/55XXXXXXXXX"
                        target="_blank"
                        className="mt-2 px-5 py-3 text-center rounded-full bg-blue-600 text-white font-medium"
                    >
                        Falar no WhatsApp
                    </a>
                </nav>
            </div>
        </header>
    )
}
