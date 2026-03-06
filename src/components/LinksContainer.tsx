import { Instagram, MapPin, MessageCircle } from "lucide-react"
import LinkButton from "./LinkButton"

export default function LinksContainer() {
  return (
    <div className="flex flex-col gap-3">
      <LinkButton
        label="Entre em contato pelo WhatsApp"
        href="https://wa.me/5516992832613"
        variant="primary"
        icon={<MessageCircle size={20} />}
      />

      <LinkButton
        label="Instagram"
        href="https://www.instagram.com/meus_sentidoss"
        variant="secondary"
        icon={<Instagram size={20} />}
      />
      {/* 
      <LinkButton
        label="Ebooks"
        href="https://drive.google.com/drive/folders/1fQ0OSdGcimLyi-uZF-UXcHvDCEOjOrvG"
        variant="outline"
        icon={<LibraryBig size={20} />}
      /> */}
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
      <LinkButton
        label="Como chegar na clínica"
        href="https://maps.app.goo.gl/Gvddr5929HisXMmi9"
        variant="outline"
        icon={<MapPin size={20} />}
      />
    </div>
  )
}
