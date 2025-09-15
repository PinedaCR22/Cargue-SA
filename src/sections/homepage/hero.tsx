// src/sections/Hero.tsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const IMAGES = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

// misma función que en el Navbar
function smoothScrollTo(hash: string) {
  const el = document.querySelector(hash);
  if (!el) return;
  (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const goToProyectos = (e: React.MouseEvent) => {
    e.preventDefault();
    const hash = "#proyectos";

    // Si NO estamos en home, navegamos y luego scrolleamos
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
      requestAnimationFrame(() => smoothScrollTo(hash));
      return;
    }

    // Si ya estamos en home, actualizamos URL y scrolleamos
    if (window.history?.pushState) {
      const url = `${window.location.pathname}${hash}`;
      window.history.pushState(null, "", url);
    }
    smoothScrollTo(hash);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh] overflow-hidden"
    >
      {/* Carrusel de fondo */}
      <div className="absolute inset-0 z-0">
        <Swiper
          className="h-full"
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          onSwiper={(sw) => (swiperRef.current = sw)}
        >
          {IMAGES.map((src, i) => (
            <SwiperSlide key={i} className="h-full">
              <div className="slide-inner">
                <img
                  src={src}
                  alt={`Imagen ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
        <motion.h1
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]"
        >
          CARGUE S.A.
        </motion.h1>

        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
        >
          Soluciones de construcción y movimiento de materiales con calidad y
          seguridad. Obras civiles, urbanismo, alquiler de equipo y más.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="tel:50660161790"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold bg-[#F7931A] hover:brightness-110 transition"
          >
            <Phone size={18} /> 6016-1790
          </a>

          {/* Navega y hace smooth scroll a #proyectos */}
          <Link
            to={{ pathname: "/", hash: "#proyectos" }}
            onClick={goToProyectos}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold border border-white/20 text-white hover:bg-white/10 transition"
          >
            Ver proyectos
          </Link>
        </div>
      </div>

      {/* Flechas laterales */}
      <button
        type="button"
        aria-label="Imagen anterior"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-[#F7931A] transition-colors"
      >
        <ChevronLeft className="h-10 w-10 md:h-12 md:w-12 drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]" />
      </button>
      <button
        type="button"
        aria-label="Imagen siguiente"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-[#F7931A] transition-colors"
      >
        <ChevronRight className="h-10 w-10 md:h-12 md:w-12 drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]" />
      </button>
    </section>
  );
}
