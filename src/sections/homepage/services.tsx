import { Hammer, Truck, Building2, Home, Wrench, Factory } from "lucide-react";

const items = [
  { icon: Hammer,    title: "Obras Civiles",            desc: "Estructuras, cimentación y acabados." },
  { icon: Truck,     title: "Movimiento de Materiales", desc: "Transporte y acarreo de agregados." },
  { icon: Building2, title: "Urbanismo",                 desc: "Calles, aceras, drenajes y más." },
  { icon: Home,      title: "Remodelaciones",            desc: "Residencial y comercial." },
  { icon: Wrench,    title: "Mantenimiento",             desc: "Correctivo y preventivo." },
  { icon: Factory,   title: "Alquiler de Equipo",        desc: "Maquinaria con operador." },
];

export default function Services() {
  return (
    <section id="servicios" className="py-14 md:py-20 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111]">Servicios</h2>
          <p className="text-[#4b5563]">Todo lo que tu obra necesita en un solo lugar.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-black/10 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7931A]/15">
                  <Icon className="text-[#F7931A]" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-[#4b5563]">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
