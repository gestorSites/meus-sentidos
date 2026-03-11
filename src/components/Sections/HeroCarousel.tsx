import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

type Image = {
  src: string
  alt: string
}

type Props = {
  images: Image[]
  interval?: number
}

export default function HeroCarousel({ images, interval = 5000 }: Props) {
  return (
    <div className="w-full">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: interval,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-[220px] md:h-[420px]"
      >

        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  )
}