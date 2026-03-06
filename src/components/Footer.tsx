import {
  Phone,
  Clock,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react"
import logoMeusSentidos2 from "../assets/logoMSM.png"

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-gray-700">

        {/* COLUNA 1 - SOBRE */}
        <div>
          <img
            src={logoMeusSentidos2}
            alt="Logo Meus Sentidos"
            loading="lazy"
            className="h-10 object-cover"
          />
          <p className="text-sm leading-relaxed mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum a, nam officiis molestias esse et, earum ipsam error, ipsa quam nihil laboriosam perspiciatis fuga veritatis quas voluptatem totam magni libero?
          </p>

          <div className="flex gap-4 mt-6">
            <a target="_blank" href="https://instagram.com/meus_sentidoss" className="hover:text-[#1177E3] transition">
              <Instagram size={18} />
            </a>
            <a target="_blank" href="#" className="hover:text-[#1177E3] transition">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* COLUNA 2 - CONTATO */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contato</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(16) 99283-2613</span>
            </div>


            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Segunda a Sexta – 07:00 às 18:30</span>
            </div>

            {/* LINK GOOGLE MAPS */}
            <a
              href="https://maps.app.goo.gl/tG8bjgMgc58p23J47"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#1177E3] transition"
            >
              <MapPin size={16} />
              <span>
                Rua dos Arvoredos, 830, Residencial Paraíso I, França SP, 14403-149
              </span>
            </a>
          </div>
        </div>

        {/* COLUNA 3 - MAPA EMBUTIDO */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Localização</h3>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.672893024145!2d-47.40852652831529!3d-20.56056051618114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a88edc3b82d5%3A0x84d57030f775683b!2sR.%20dos%20Arvoredos%2C%20830%20-%20Res.%20Paraiso%2C%20Franca%20-%20SP%2C%2014403-152!5e0!3m2!1spt-PT!2sbr!4v1772470306929!5m2!1spt-PT!2sbr"
              width="100%"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="border-t border-white/20 py-4 text-center text-xs">
        © {new Date().getFullYear()} Meus Sentidos — Todos os direitos reservados
      </div>
    </footer>
  )
}