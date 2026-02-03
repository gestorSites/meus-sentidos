import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import personImg from "../../assets/person.jpg"

import "swiper/css"
import "swiper/css/navigation"

import TeamCard from "../TeamCard"

const team = [
  {
    name: "Dra. Ana Silva",
    role: "Psicóloga Infantil",
    description:
      "Especialista em TEA, com mais de 10 anos de experiência no atendimento de crianças e adolescentes.",
    image: personImg,
  },
  {
    name: "João Pereira",
    role: "Terapeuta Ocupacional",
    description:
      "Atuação focada no desenvolvimento sensorial e motor de crianças no espectro autista.",
    image: personImg,
  },
  {
    name: "Maria Souza",
    role: "Fonoaudióloga",
    description:
      "Experiência em comunicação alternativa e linguagem para crianças com TEA.",
    image: personImg
  },
  {
    name: "Maria Souza",
    role: "Fonoaudióloga",
    description:
      "Experiência em comunicação alternativa e linguagem para crianças com TEA.",
    image: personImg
  },
  {
    name: "Maria Souza",
    role: "Fonoaudióloga",
    description:
      "Experiência em comunicação alternativa e linguagem para crianças com TEA.",
    image: personImg
  },
]

export default function TeamCarousel() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        loop
        speed={600}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".team-next",
          prevEl: ".team-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {team.map((person, index) => (
          <SwiperSlide key={index}>
            <TeamCard {...person} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="
          team-prev
          absolute left-0 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full
          bg-white shadow-md
          flex items-center justify-center
          text-xl text-blue-600
          hover:bg-blue-600 hover:text-white
          transition-all duration-200
        "
        aria-label="Anterior"
      >
        ‹
      </button>

      <button
        className="
          team-next
          absolute right-0 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full
          bg-white shadow-md
          flex items-center justify-center
          text-xl text-blue-600
          hover:bg-blue-600 hover:text-white
          transition-all duration-200
        "
        aria-label="Próximo"
      >
        ›
      </button>
    </div>
  )
}
