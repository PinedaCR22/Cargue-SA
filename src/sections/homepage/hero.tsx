import { Building2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#F7931A_0%,_#ffdfa9_40%,_white_85%)]" />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.h1
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111]"
        >
          CARGUE S.A.
        </motion.h1>

        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-[#374151]"
        >
          Soluciones de construcción y movimiento de materiales con calidad y
          seguridad. Obras civiles, urbanismo, alquiler de equipo y más.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="tel:50660161790"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold
                       bg-[#F7931A] hover:brightness-110 transition"
          >
            <Phone size={18} /> 6016-1790
          </a>

          <Link
            to="/#proyectos"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold border border-black/10
                       hover:bg-black/5 transition"
          >
            <Building2 size={18} /> Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
