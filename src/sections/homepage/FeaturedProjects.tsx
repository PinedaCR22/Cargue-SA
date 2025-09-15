// src/sections/FeaturedProjects.tsx
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const baseImages = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
const projects: Project[] = [...baseImages, ...baseImages].map((img, idx) => ({
  id: `proj-${idx + 1}`,
  title: `Proyecto ${idx + 1}`,
  subtitle: "Obra civil / Urbanismo — movimiento de materiales y construcción.",
  description:
    "Descripción ampliada del proyecto: alcance, tiempos, materiales principales, equipo involucrado y resultados. Incluye detalles de cronograma, metrados clave y aprendizajes aplicados para optimizar costo/tiempo sin comprometer calidad.",
  image: img,
}));

export default function FeaturedProjects() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="proyectos" className="py-14 md:py-20 bg-white text-[#111] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Proyectos destacados</h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg">Calidad comprobada en cada obra.</p>
        </header>

        <div className="relative">
          {/* Flechas navegación: ahora visibles en móvil también */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 shadow transition"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 shadow transition"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(sw) => (swiperRef.current = sw)}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            // 👇 En móvil (base) ahora 2 visibles. Avanza de 1 en 1.
            spaceBetween={16}
            slidesPerView={2}
            slidesPerGroup={1}
            speed={500}
            grabCursor
            breakpoints={{
              640: { spaceBetween: 20, slidesPerView: 2 },
              768: { spaceBetween: 24, slidesPerView: 2 },
              1024: { spaceBetween: 24, slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.id}>
                <motion.button
                  type="button"
                  onClick={() => setSelected(p)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full text-left"
                >
                  <figure className="flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-black/10 shadow-sm h-80">
                    <div className="h-1/2 w-full overflow-hidden">
                      <motion.img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.35 }}
                      />
                    </div>
                    <figcaption className="flex flex-col justify-center p-4 h-1/2">
                      <h3 className="text-lg md:text-xl font-semibold text-[#111]">{p.title}</h3>
                      <p className="mt-1 text-sm md:text-base text-gray-600">{p.subtitle}</p>
                    </figcaption>
                  </figure>
                </motion.button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-title"
              className="absolute inset-0 flex items-center justify-center p-4"
              initial={{ scale: 0.98, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
                  <h4 id="project-title" className="text-lg md:text-xl font-bold text-[#111]">
                    {selected.title}
                  </h4>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Cerrar"
                    className="p-2 rounded-lg hover:bg-black/[0.06] transition"
                  >
                    <X />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-56 md:h-full">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600">{selected.subtitle}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
                      {selected.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-xs rounded-full bg-[#F7931A]/15 text-[#9a5a00]">
                        Obra civil
                      </span>
                      <span className="px-2.5 py-1 text-xs rounded-full bg-[#F7931A]/15 text-[#9a5a00]">
                        Urbanismo
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-4 border-t border-black/10 flex items-center justify-end gap-2">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-[#111] hover:bg-black/[0.06] transition"
                  >
                    Cerrar
                  </button>
                  <a
                    href="#contacto"
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold bg-[#F7931A] text-white hover:brightness-110 transition"
                  >
                    Solicitar cotización
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
