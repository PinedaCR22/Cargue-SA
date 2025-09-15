// src/sections/WhyUs.tsx
import { ShieldCheck, BadgeCheck, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

export default function WhyUs() {
  const [index, setIndex] = useState(0);

  // Cambiar foto cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="por-que-elegirnos"
      className="py-14 md:py-20 bg-gradient-to-br from-[#F7931A] via-[#F7931A]/95 to-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-black">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-3 text-black/80">
            Experiencia, cumplimiento y seguridad en cada proyecto. Acompañamos
            de inicio a fin con un equipo especializado y equipamiento
            profesional.
          </p>
          <ul className="mt-6 space-y-3 text-black">
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-black" />
              <span>Seguridad y normativa vigente.</span>
            </li>
            <li className="flex items-center gap-3">
              <BadgeCheck className="text-black" />
              <span>Calidad certificada y acabados profesionales.</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-black" />
              <span>Entrega a tiempo y gestión transparente.</span>
            </li>
          </ul>
        </div>

        {/* Imagen que rota automáticamente */}
        <div className="rounded-2xl bg-white shadow-xl border-4 border-black overflow-hidden">
          <div className="relative aspect-video w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${images[index]})` }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
