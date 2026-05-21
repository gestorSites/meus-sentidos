import { useEffect, useState } from "react"
import clsx from "clsx"
import logoMeusSentidos2 from "../assets/logoMSM.png"
import { useActiveSection } from "../hooks/useActiveSection"
import { ChevronDown } from "lucide-react"
import { useLocation } from "react-router-dom"

const sections = ["home", "sobre", "especialidades", "faq", "contato"]

const menu = [
    { label: "Início", id: "home" },
    { label: "Historia", id: "sobre" },
    { label: "Profissionais", href: "/profissionais" },
    { label: "FAQ", id: "faq" },
    { label: "Contato", id: "contato" },
    { label: "Avaliações", href: "/avaliacoes" },
]
const specialties = [
    { label: "Psicologia", href: "/especialidades#psicologia" },
    { label: "ABA", href: "/especialidades#aba" },
    { label: "Acompanhamento Terapêutico", href: "/especialidades#acompanhamento-terapeutico" },
    { label: "Fonoaudiologia", href: "/especialidades#fonoaudiologia" },
    { label: "Laserterapia", href: "/especialidades#laserterapia" },
    { label: "Neuromodulação", href: "/especialidades#neuromodulacao" },
    { label: "Neuropsicopedagogia", href: "/especialidades#neuropsicopedagogia" },
    { label: "Reforço Escolar", href: "/especialidades#reforco-escolar" },
    { label: "Terapia Ocupacional", href: "/especialidades#terapia-ocupacional" },
    { label: "Integração Sensorial de Ayres", href: "/especialidades#integracao-sensorial" },
    { label: "Fisioterapia", href: "/especialidades#fisioterapia" },
    { label: "Pilates", href: "/especialidades#pilates" },
    { label: "Terapia Aquática", href: "/especialidades#terapia-aquatica" },
    { label: "Musicoterapia", href: "/especialidades#musicoterapia" },
    { label: "Educação Física", href: "/especialidades#educacao-fisica" },
    { label: "Musculação", href: "/especialidades#musculacao" },
]

const empresasLinks = [
    { label: "Análise Ergonômica", href: "/empresas#analise_ergonomica" },
    { label: "Assessoria em Ergonomia", href: "/empresas#assessoria_ergonomia" },
    { label: "Projetos / Planos de Ação", href: "/empresas#projetos_planos_acao" },
    { label: "Palestras e Treinamentos", href: "/empresas#palestras_treinamentos" },
    { label: "Inclusão da Pessoa com Deficiência", href: "/empresas#inclusao_pcd" },
]


export default function Header() {
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const active = useActiveSection(sections)
    const [openOthersMobile, setOpenOthersMobile] = useState(false)
    const [openEmpresasMobile, setOpenEmpresasMobile] = useState(false)

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
            <div className="h-[6px] w-full bg-gradient-to-r from-[#F2D13D] via-[#5BC0EB] to-[#0B3C49]" />
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="/"
                    className="flex items-center gap-3 font-semibold text-[#1177E3]"
                >
                    <img
                        src={logoMeusSentidos2}
                        alt="Logo Meus Sentidos"
                        loading="lazy"
                        className="h-10 object-cover"
                    />
                </a>

                <nav className="hidden md:flex items-center gap-4">
                    {menu.map((item) => {
                        const isActive = item.id && active === item.id

                        return (
                            <a
                                key={item.label}
                                href={
                                    item.href
                                        ? item.href
                                        : location.pathname === "/"
                                            ? `#${item.id}`
                                            : `/#${item.id}`
                                }
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
                            <span>Especialidades</span>

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
            absolute top-full mt-3 right-0 w-96 grid grid-cols-2
            bg-white rounded-xl shadow-lg border py-2
            opacity-0 invisible translate-y-2
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
            transition-all duration-200
        "
                        >
                            {specialties.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target='_self'
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-blue-600 transition-all">
                            <span>Empresas</span>
                            <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                                <ChevronDown size={16} />
                            </span>
                        </div>

                        <div className="absolute top-full mt-3 right-0 w-72 bg-white rounded-xl shadow-lg border py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                            {empresasLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
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
                    open ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
                )}
            >
                <nav className="bg-white border-t px-6 py-4 flex flex-col gap-4">
                    {menu.map((item) => (
                        <a
                            key={item.id}
                            href={
                                item.href
                                    ? item.href
                                    : location.pathname === "/"
                                        ? `#${item.id}`
                                        : `/#${item.id}`
                            }
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
                            Especialidades
                            <span className={clsx("transition", openOthersMobile && "rotate-180")}>
                                ▾
                            </span>
                        </button>

                        {openOthersMobile && (
                            <div className="mt-2 ml-4 flex flex-col gap-2">
                                {specialties.map((link) => (
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
                    <div>
                        <button
                            onClick={() => setOpenEmpresasMobile(!openEmpresasMobile)}
                            className="w-full flex justify-between items-center font-medium text-gray-700"
                        >
                            Empresas
                            <span className={clsx("transition", openEmpresasMobile && "rotate-180")}>
                                ▾
                            </span>
                        </button>

                        {openEmpresasMobile && (
                            <div className="mt-2 ml-4 flex flex-col gap-2">
                                {empresasLinks.map((link) => (
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
