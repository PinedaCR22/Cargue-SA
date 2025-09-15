// src/sections/Services.tsx
import { Hammer, Truck, Building2, Home, Wrench, Factory, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  route: string;
  image: string;
};

const baseImgs = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

const items: Service[] = [
  { icon: Hammer,    title: "Obras Civiles",            desc: "Estructuras, cimentación y acabados.", route: "/servicios/obras-civiles",      image: baseImgs[0] },
  { icon: Truck,     title: "Movimiento de Materiales", desc: "Transporte y acarreo de agregados.",   route: "/servicios/movimiento-materiales", image: baseImgs[1] },
  { icon: Building2, title: "Urbanismo",                desc: "Calles, aceras, drenajes y más.",      route: "/servicios/urbanismo",           image: baseImgs[2] },
  { icon: Home,      title: "Remodelaciones",           desc: "Residencial y comercial.",             route: "/servicios/remodelaciones",      image: baseImgs[0] },
  { icon: Wrench,    title: "Mantenimiento",            desc: "Correctivo y preventivo.",             route: "/servicios/mantenimiento",       image: baseImgs[1] },
  { icon: Factory,   title: "Alquiler de Equipo",       desc: "Maquinaria con operador.",             route: "/servicios/alquiler-equipo",     image: baseImgs[2] },
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

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="servicios" className="py-14 md:py-20 bg-black scroll-mt-24 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <motion.header
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-extrabold text-white font-sans"
          >
            Servicios
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400">
            Todo lo que tu obra necesita en un solo lugar.
          </motion.p>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((svc) => {
            const Icon = svc.icon;
            return (
              <button
                key={svc.title}
                type="button"
                onClick={() => setSelected(svc)}
                className="text-left"
              >
                <motion.article
                  variants={card}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl border border-white/10 p-5 shadow-sm hover:shadow-md transition bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7931A]/15"
                    >
                      <Icon className="text-[#F7931A]" />
                    </motion.span>
                    <h3 className="text-lg font-semibold text-white">{svc.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">{svc.desc}</p>
                </motion.article>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
  {selected && (
    <motion.div
      className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-[2px]"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="svc-title"
        className="absolute inset-0 flex items-center justify-center p-4"
        initial={{ scale: 0.98, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 12 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
            <div className="flex items-center gap-2">
              <selected.icon className="h-5 w-5 text-[#F7931A]" />
              <h4 id="svc-title" className="text-lg md:text-xl font-bold text-[#111]">
                {selected.title}
              </h4>
            </div>
            <button
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
              className="p-2 rounded-lg hover:bg-black/[0.06] transition"
            >
              <X />
            </button>
          </div>

          {/* Body */}
          <div className="grid md:grid-cols-2">
            <div className="h-56 md:h-full">
              <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600">{selected.desc}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
                Contamos con personal calificado, maquinaria y control de calidad para
                asegurar tiempos, costos y seguridad en obra. Escríbenos para armar un
                presupuesto a medida.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs rounded-full bg-[#F7931A]/15 text-[#9a5a00]">
                  Servicio
                </span>
                <span className="px-2.5 py-1 text-xs rounded-full bg-[#F7931A]/15 text-[#9a5a00]">
                  CARGUE S.A.
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-4 border-t border-black/10 flex items-center justify-end">
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
