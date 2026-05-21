import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type ImageCarouselProps = {
  images: string[]
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
              src={img}
              alt="Imagem"
              loading="lazy"
              style={{ height }}
              className="w-full object-cover transition duration-700 hover:scale-105 cursor-grab"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}