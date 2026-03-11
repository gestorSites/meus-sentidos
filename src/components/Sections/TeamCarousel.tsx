import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import { Link } from "react-router-dom"
import TeamCard from "../TeamCard"
import { profissionais } from "../../data/profissionais"


export default function TeamCarousel() {
  // profissionais is a Record keyed by string; convert to an array of [slug, person]
  const entries = Object.entries(profissionais) as [string, typeof profissionais[string]][]

  return (
    <section id="profissionais" className="bg-red-50 py-20 scroll-mt-24">
      <h2 className="text-3xl font-bold text-center text-[#1177E3] mb-12">
        Profissionais
      </h2>
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
          {entries.map(([slug, person]) => (
            <SwiperSlide key={slug}>
              <Link to={`/profissionais/${slug}`} className="block h-full">
                <TeamCard
                  image={person.foto}
                  name={person.nome}
                  role={person.cargo}
                />
              </Link>
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
    </section>
  )
}
