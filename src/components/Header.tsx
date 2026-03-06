import { useEffect, useState } from "react"
import clsx from "clsx"
import logoMeusSentidos2 from "../assets/logoMSM.png"
import { useActiveSection } from "../hooks/useActiveSection"
import { ChevronDown } from "lucide-react"

const sections = ["", "sobre", "especialidades", "profissionais", "faq", "contato"]

const menu = [
    { label: "Início", id: "" },
    { label: "Historia", id: "sobre" },
    { label: "Especialidades", id: "especialidades" },
    { label: "Profissionais", id: "profissionais" },
    { label: "FAQ", id: "faq" },
    { label: "Contato", id: "contato" },
]
const otherLinks = [
    { label: "Página de Links", href: "/links", blank: true },
    { label: "Blog", href: "/blog" },
    { label: "Outra Página", href: "/outra" },
]


export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const active = useActiveSection(sections)
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
            <div className="h-[4px] w-full bg-gradient-to-r from-[#F2D13D] via-[#5BC0EB] to-[#0B3C49]" />
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="#home"
                    className="flex items-center gap-3 font-semibold text-[#1177E3]"
                >
                    <img
                        src={logoMeusSentidos2}
                        alt="Logo Meus Sentidos"
                        loading="lazy"
                        className="h-10 object-cover"
                    />
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
                    <div className="relative group">
                        <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-blue-600 transition-all">
                            <span>Outros</span>

                            <span
                                className="
                text-xs
                transition-transform duration-200
                group-hover:rotate-180
            "
                            >
                                <ChevronDown size={16} />
                            </span>
                        </div>

                        <div
                            className="
            absolute top-full mt-3 right-0 w-48
            bg-white rounded-xl shadow-lg border py-2
            opacity-0 invisible translate-y-2
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
            transition-all duration-200
        "
                        >
                            {otherLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target={link.blank ? '_blank' : '_self'}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>



                    <a
                        href="https://wa.me/5516992832613"
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
                    <span className="w-6 h-0.5 bg-[#1177E3]" />
                    <span className="w-6 h-0.5 bg-[#1177E3]" />
                    <span className="w-6 h-0.5 bg-[#1177E3]" />
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
                        href="https://wa.me/5516992832613"
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
