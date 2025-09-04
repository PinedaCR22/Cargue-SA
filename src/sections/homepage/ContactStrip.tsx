// src/sections/ContactStrip.tsx
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactStrip = () => {
  return (
    <section
      id="contacto"
      className="bg-[#F7931A] text-[#111] scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Listo para cotizar tu proyecto?
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:50660161790"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold hover:brightness-95 transition"
            >
              <Phone size={20} /> 6016-1790
            </a>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-black/20 px-5 py-3 font-semibold hover:bg-black/10 transition"
            >
              <Mail size={20} /> Contáctanos
            </Link>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div className="bg-white rounded-2xl shadow p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#F7931A] focus:ring-[#F7931A] outline-none"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                Número
              </label>
              <input
                type="tel"
                id="numero"
                name="numero"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#F7931A] focus:ring-[#F7931A] outline-none"
                placeholder="Tu número de contacto"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#F7931A] focus:ring-[#F7931A] outline-none resize-none"
                placeholder="Escribe tu mensaje..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#F7931A] text-white font-semibold py-3 hover:brightness-110 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
