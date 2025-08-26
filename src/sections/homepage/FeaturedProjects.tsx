import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const images = ["/projects/1.jpg", "/projects/2.jpg", "/projects/3.jpg"];

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="py-14 md:py-20 bg-[#111] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Proyectos destacados</h2>
          <p className="text-white/70">Calidad comprobada en cada obra.</p>
        </header>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-10"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <figure className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <img
                  src={src}
                  alt={`Proyecto ${i + 1}`}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm text-white/80">
                  Proyecto {i + 1} — Obra civil / Urbanismo
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
