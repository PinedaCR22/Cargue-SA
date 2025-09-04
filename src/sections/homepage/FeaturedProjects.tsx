// src/sections/FeaturedProjects.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

export default function FeaturedProjects() {
  return (
    <section
      id="proyectos"
      className="py-14 md:py-20 bg-[#111] text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Proyectos destacados
          </h2>
          <p className="mt-2 text-white/70 text-base md:text-lg">
            Calidad comprobada en cada obra.
          </p>
        </header>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-12"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 shadow-md h-80"
              >
                {/* Mitad superior: foto */}
                <div className="h-1/2 w-full overflow-hidden">
                  <motion.img
                    src={src}
                    alt={`Proyecto ${i + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                  />
                </div>

                {/* Mitad inferior: texto */}
                <figcaption className="flex flex-col justify-center p-4 h-1/2">
                  <h3 className="text-lg md:text-xl font-semibold text-white/90">
                    Proyecto {i + 1}
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-white/70">
                    Obra civil / Urbanismo — movimiento de materiales y
                    construcción.
                  </p>
                </figcaption>
              </motion.figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
