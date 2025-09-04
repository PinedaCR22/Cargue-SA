// src/sections/Services.tsx
import { Hammer, Truck, Building2, Home, Wrench, Factory } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const items = [
  { icon: Hammer,    title: "Obras Civiles",            desc: "Estructuras, cimentación y acabados." },
  { icon: Truck,     title: "Movimiento de Materiales", desc: "Transporte y acarreo de agregados." },
  { icon: Building2, title: "Urbanismo",                desc: "Calles, aceras, drenajes y más." },
  { icon: Home,      title: "Remodelaciones",           desc: "Residencial y comercial." },
  { icon: Wrench,    title: "Mantenimiento",            desc: "Correctivo y preventivo." },
  { icon: Factory,   title: "Alquiler de Equipo",       desc: "Maquinaria con operador." },
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
  return (
    <section id="servicios" className="py-14 md:py-20 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.header
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8"
        >
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-[#111]">
            Servicios
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#4b5563]">
            Todo lo que tu obra necesita en un solo lugar.
          </motion.p>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={card}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-black/10 p-5 shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7931A]/15"
                >
                  <Icon className="text-[#F7931A]" />
                </motion.span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#4b5563]">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
