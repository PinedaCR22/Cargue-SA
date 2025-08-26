import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactStrip = () => {
  return (
    <section
      id="contacto"                
      className="bg-[#F7931A] text-[#111] scroll-mt-24" // scroll-mt evita que el sticky navbar tape el título
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          ¿Listo para cotizar tu proyecto?
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="tel:50660161790"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold hover:brightness-95"
          >
            <Phone size={18} /> 6016-1790
          </a>
          <Link
            to="/#contacto"   // 👈 mejor usar hash
            className="inline-flex items-center gap-2 rounded-xl border border-black/20 px-4 py-2 font-semibold hover:bg-black/10"
          >
            <Mail size={18} /> Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
