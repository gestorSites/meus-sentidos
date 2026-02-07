import { Instagram, LibraryBig, MapPin, MessageCircle } from "lucide-react"
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

      <LinkButton
        label="Ebooks"
        href="https://drive.google.com/drive/folders/1fQ0OSdGcimLyi-uZF-UXcHvDCEOjOrvG"
        variant="outline"
        icon={<LibraryBig size={20} />}
      />

      <LinkButton
        label="Como chegar na clínica"
        href="https://maps.app.goo.gl/Gvddr5929HisXMmi9"
        variant="outline"
        icon={<MapPin size={20} />}
      />
    </div>
  )
}
