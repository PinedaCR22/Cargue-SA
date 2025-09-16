// src/components/Info.tsx
import { Building2, Users, Ruler, Banknote, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const stats = [
  { Icon: Building2, value: "+20 años", label: "De experiencia en construcción" },
  { Icon: Users, value: "+100", label: "Historias de éxito con clientes" },
  { Icon: Ruler, value: "+25,000m²", label: "Apartamentos, casas, oficinas y más" },
  { Icon: Banknote, value: "+$5,000,000", label: "En financiamiento para proyectos" },
  { Icon: ClipboardCheck, value: "+100", label: "Permisos de construcción tramitados" },
];

// ✅ Usa cubic-bézier en ease para cumplir el tipo
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1], // ≈ easeOutQuad, válido para TS
    },
  },
};

export default function Info() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-extrabold text-gray-900 mb-12"
        >
          Sobre Cargue S.A.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {stats.map(({ Icon, value, label }, i) => (
            <motion.article
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col items-center text-center rounded-2xl p-4"
            >
              <motion.div
                aria-hidden
                className="mb-3 rounded-2xl"
                whileHover={{ rotate: 2 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <Icon className="h-10 w-10 text-[#F7931A] group-hover:drop-shadow group-hover:brightness-110 transition" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900">{value}</h3>
              <p className="mt-1 text-sm text-gray-600">{label}</p>

              <motion.span
                className="mt-3 h-0.5 w-10 bg-[#F7931A]/80 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                whileHover={{ width: 56 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
