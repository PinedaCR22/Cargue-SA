// src/sections/FeaturedProjects.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { projects, type Project } from "../../data/proyects";

/* ───────── Rotador de imágenes reutilizable ───────── */
function AutoImageRotator({
  images,
  alt,
  delay = 5000,
  paused = false,
  className = "",
  imgClassName = "absolute inset-0 h-full w-full object-cover",
}: {
  images: string[];
  alt: string;
  delay?: number;
  paused?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), delay);
    return () => clearInterval(id);
  }, [paused, images.length, delay]);

  useEffect(() => setIdx(0), [images]);

  const currentImage = images[Math.min(idx, images.length - 1)] ?? images[0] ?? "";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={encodeURI(currentImage)}
          alt={alt}
          className={imgClassName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          loading="lazy"
          decoding="async"
        />
      </AnimatePresence>
    </div>
  );
}

/* ───────── Card uniforme (misma altura) + TAGS ───────── */
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const { images, title, subtitle, tags = [] } = project;
  const visibleTags = tags.slice(0, 3);
  const extra = Math.max(0, tags.length - visibleTags.length);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full text-left h-full"
    >
      {/* Alto fijo por breakpoint para uniformidad */}
      <figure className="grid h-[420px] sm:h-[440px] md:h-[470px] grid-rows-[58%_42%] overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/10">
        <AutoImageRotator
          images={images}
          alt={title}
          paused={false}
          className="relative w-full h-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <figcaption className="flex flex-col px-4 py-3 sm:px-5 sm:py-4 overflow-hidden">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#111] line-clamp-2">
            {title}
          </h3>
          <p className="mt-1 text-sm sm:text-[15px] lg:text-base text-gray-600 line-clamp-2">
            {subtitle}
          </p>

          {/* Tags al fondo, sin romper la altura del card */}
          {(visibleTags.length > 0 || extra > 0) && (
            <div className="mt-auto pt-3 sm:pt-4 flex flex-wrap gap-2">
              {visibleTags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] sm:text-xs rounded-full bg-[#F7931A]/15 text-[#9a5a00]"
                >
                  {t}
                </span>
              ))}
              {extra > 0 && (
                <span className="px-2.5 py-1 text-[11px] sm:text-xs rounded-full bg-gray-100 text-gray-700">
                  +{extra}
                </span>
              )}
            </div>
          )}
        </figcaption>
      </figure>
    </motion.button>
  );
}

/* ───────── Sección principal ───────── */
export default function FeaturedProjects() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  // Bloquear scroll del body con modal abierto
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // Pausar autoplay del Swiper cuando hay modal (rotadores internos NO se detienen)
  useEffect(() => {
    if (selected) swiperRef.current?.autoplay?.stop();
    else swiperRef.current?.autoplay?.start();
  }, [selected]);

  // Cerrar modal con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="proyectos" className="bg-white text-[#111] scroll-mt-24 py-12 sm:py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Proyectos destacados
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
            Calidad comprobada en cada obra.
          </p>
        </header>

        <div className="relative">
          {/* Flechas solo en md+ */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden md:block">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => swiperRef.current?.slidePrev()}
              className="pointer-events-auto absolute left-1 -translate-y-1/2 top-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 shadow transition hover:bg-black/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => swiperRef.current?.slideNext()}
              className="pointer-events-auto absolute right-1 -translate-y-1/2 top-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 shadow transition hover:bg-black/10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            onSwiper={(sw) => (swiperRef.current = sw)}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            // SIEMPRE mínimo 2 visibles
            spaceBetween={14}
            slidesPerView={2}
            breakpoints={{
              640: { spaceBetween: 18, slidesPerView: 2 },
              1024: { spaceBetween: 24, slidesPerView: 3 },
            }}
            speed={500}
            grabCursor
            className="!pb-10 sm:!pb-12"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.id} className="!h-auto">
                <div className="h-full">
                  <ProjectCard project={p} onOpen={setSelected} />
                </div>
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
              {/* Ventana centrada (nunca full-screen) */}
              <div className="w-full max-w-3xl max-h-[85vh] rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden">
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                  <h4 id="project-title" className="text-lg md:text-xl font-bold text-[#111]">
                    {selected.title}
                  </h4>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Cerrar"
                    className="rounded-lg p-2 transition hover:bg-black/[0.06]"
                  >
                    <X />
                  </button>
                </div>

                {/* Contenido con scroll si excede */}
                <div className="grid md:grid-cols-2 overflow-y-auto max-h-[calc(85vh-7.5rem)]">
                  <AutoImageRotator
                    images={selected.images}
                    alt={selected.title}
                    delay={5000}
                    paused={false}
                    className="w-full h-56 md:h-full"
                    imgClassName="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="p-5">
                    <p className="text-sm text-gray-600">{selected.subtitle}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-700 whitespace-pre-line">
                      {selected.description}
                    </p>
                    {selected.tags?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selected.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs rounded-full bg-[#F7931A]/15 text-[#9a5a00]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 border-t border-black/10 px-5 py-4">
                  <button
                    onClick={() => setSelected(null)}
                    className="rounded-xl px-4 py-2 text-sm font-semibold text-[#111] transition hover:bg-black/[0.06]"
                  >
                    Cerrar
                  </button>
                  <a
                    href="#contacto"
                    onClick={() => setSelected(null)}
                    className="rounded-xl bg-[#F7931A] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
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
