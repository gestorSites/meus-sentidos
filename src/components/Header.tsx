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
const otherLinks = [
    { label: "Página de Links", href: "/links" },
    { label: "Blog", href: "/blog" },
    { label: "Outra Página", href: "/outra" },
]


export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const active = useActiveSection(sections)
    const [openOthers, setOpenOthers] = useState(false)
    const [openOthersMobile, setOpenOthersMobile] = useState(false)

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
                <a
                    href="#home"
                    className="flex items-center gap-3 font-semibold text-blue-900"
                >
                    <img
                        src={logoMeusSentidos}
                        alt="Logo Meus Sentidos"
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                    />
                    Meus Sentidos
                </a>

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
                    <div className="relative">
                        <button
                            onClick={() => setOpenOthers(!openOthers)}
                            className="text-gray-700 hover:text-blue-600 transition-all"
                        >
                            Outros
                        </button>

                        {openOthers && (
                            <div className="absolute top-full mt-3 right-0 w-48 bg-white rounded-xl shadow-lg border py-2">
                                {otherLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>


                    <a
                        href="https://wa.me/55XXXXXXXXX"
                        target="_blank"
                        className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                    >
                        WhatsApp
                    </a>
                </nav>

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
                    <div>
                        <button
                            onClick={() => setOpenOthersMobile(!openOthersMobile)}
                            className="w-full flex justify-between items-center font-medium text-gray-700"
                        >
                            Outros
                            <span className={clsx("transition", openOthersMobile && "rotate-180")}>
                                ▾
                            </span>
                        </button>

                        {openOthersMobile && (
                            <div className="mt-2 ml-4 flex flex-col gap-2">
                                {otherLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="text-sm text-gray-600 hover:text-blue-600 transition"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
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
