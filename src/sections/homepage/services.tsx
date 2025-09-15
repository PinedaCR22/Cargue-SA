// src/sections/Services.tsx
import { Hammer, Truck, Building2, Home, Wrench, Factory, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  route: string;
  image: string;
};

const baseImgs = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

const items: Service[] = [
  { icon: Hammer,    title: "Obras Civiles",            desc: "Estructuras, cimentación y acabados.", route: "/servicios/obras-civiles",        image: baseImgs[0] },
  { icon: Truck,     title: "Movimiento de Materiales", desc: "Transporte y acarreo de agregados.",   route: "/servicios/movimiento-materiales", image: baseImgs[1] },
  { icon: Building2, title: "Urbanismo",                desc: "Calles, aceras, drenajes y más.",      route: "/servicios/urbanismo",             image: baseImgs[2] },
  { icon: Home,      title: "Remodelación",           desc: "Residencial y comercial.",             route: "/servicios/remodelación",        image: baseImgs[0] },
  { icon: Wrench,    title: "Mantenimiento",            desc: "Correctivo y preventivo.",             route: "/servicios/mantenimiento",         image: baseImgs[1] },
  { icon: Factory,   title: "Alquiler de Equipo",       desc: "Maquinaria con operador.",             route: "/servicios/alquiler-equipo",       image: baseImgs[2] },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = selected ? "hidden" : original;
    return () => { document.body.style.overflow = original; };
  }, [selected]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (selected && closeBtnRef.current) closeBtnRef.current.focus();
  }, [selected]);

  return (
    <section id="servicios" className="py-14 md:py-20 bg-black scroll-mt-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.header
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8"
        >
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-extrabold text-white font-sans">
            Servicios
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400">
            Todo lo que tu obra necesita en un solo lugar.
          </motion.p>
        </motion.header>

        {/* 👉 2 columnas base (móvil), 3 en lg+ */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          {items.map((svc) => {
            const Icon = svc.icon;
            return (
              <button
                key={svc.title}
                type="button"
                onClick={() => setSelected(svc)}
                className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7931A]/60 rounded-2xl"
              >
                <motion.article
                  variants={card}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl border border-white/10 p-4 sm:p-5 shadow-sm hover:shadow-md transition bg-white/5 min-h-[112px]"
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#F7931A]/15 shrink-0"
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#F7931A]" />
                    </motion.span>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                      {svc.title}
                    </h3>
                  </div>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400">{svc.desc}</p>
                </motion.article>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Modal / Bottom-sheet */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* padding en móvil para que NO toque bordes */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="svc-title"
              aria-describedby="svc-desc"
              className="absolute inset-0 flex items-end sm:items-center justify-center p-3 sm:p-4"
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full sm:max-w-2xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden rounded-2xl sm:rounded-2xl mx-auto">
                {/* Header sticky */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-black/10 bg-white">
                  <div className="flex items-center gap-2">
                    <selected.icon className="h-5 w-5 text-[#F7931A]" />
                    <h4 id="svc-title" className="text-base sm:text-lg md:text-xl font-bold text-[#111]">
                      {selected.title}
                    </h4>
                  </div>
                  <button
                    ref={closeBtnRef}
                    onClick={() => setSelected(null)}
                    aria-label="Cerrar"
                    className="p-2 sm:p-2.5 rounded-lg hover:bg-black/[0.06] transition focus:outline-none focus:ring-2 focus:ring-[#F7931A]/50"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Contenido scrollable */}
                <div className="max-h-[75vh] sm:max-h-[80vh] overflow-y-auto">
                  <div className="grid sm:grid-cols-2">
                    <div className="relative">
                      <div className="aspect-[16/9] sm:aspect-auto sm:h-full">
                        <img
                          src={selected.image}
                          alt={selected.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <p id="svc-desc" className="text-sm text-gray-600">{selected.desc}</p>
                      <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
                        Contamos con personal calificado, maquinaria y control de calidad para
                        asegurar tiempos, costos y seguridad en obra. Escríbenos para armar un
                        presupuesto a medida.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 text-xs rounded-full bg-[#F7931A]/15 text-[#9a5a00]">Servicio</span>
                        <span className="px-2.5 py-1 text-xs rounded-full bg-[#F7931A]/15 text-[#9a5a00]">CARGUE S.A.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer sticky con safe-area */}
                <div className="sticky bottom-0 z-10 px-4 sm:px-5 py-3 sm:py-4 border-t border-black/10 bg-white flex items-center justify-end pb-[calc(env(safe-area-inset-bottom)+14px)]">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-[#111] hover:bg-black/[0.06] transition"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
