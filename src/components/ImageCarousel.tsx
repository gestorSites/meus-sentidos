import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type CarouselImage = {
  src: string
  alt: string
  /** object-position, para foto vertical que precisa de outro corte na faixa */
  foco?: string
}

type ImageCarouselProps = {
  images: CarouselImage[]
  height?: string
}

export default function ImageCarousel({
  images,
  height = "420px"
}: ImageCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500 }}
      loop
      className="rounded-3xl shadow-xl overflow-hidden"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              style={{ height, objectPosition: img.foco }}
              className="w-full object-cover transition duration-700 hover:scale-105 cursor-grab"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}