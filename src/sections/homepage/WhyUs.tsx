import { ShieldCheck, BadgeCheck, Clock } from "lucide-react";

export default function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="py-14 md:py-20 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#111]">¿Por qué elegirnos?</h2>
          <p className="mt-3 text-[#4b5563]">
            Experiencia, cumplimiento y seguridad en cada proyecto. Acompañamos de inicio a fin con
            un equipo especializado y equipamiento profesional.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-[#F7931A]" />
              <span>Seguridad y normativa vigente.</span>
            </li>
            <li className="flex items-center gap-3">
              <BadgeCheck className="text-[#F7931A]" />
              <span>Calidad certificada y acabados profesionales.</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-[#F7931A]" />
              <span>Entrega a tiempo y gestión transparente.</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 p-6">
          <div className="aspect-video w-full rounded-xl bg-[url('/projects/cover.jpg')] bg-cover bg-center" />
          <p className="mt-4 text-sm text-[#4b5563]">
            Imagen de referencia — reemplaza <code>/projects/cover.jpg</code> por una foto real.
          </p>
        </div>
      </div>
    </section>
  );
}
