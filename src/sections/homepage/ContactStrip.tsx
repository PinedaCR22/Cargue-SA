// src/sections/ContactStrip.tsx
import { useRef, useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const NAME_MAX = 50;
const PHONE_MAX = 8;
const MSG_MAX = 1000;

const nameRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]*$/; // solo letras y espacios
const phoneRegex = /^[0-9]*$/; // solo números

const ContactStrip = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [values, setValues] = useState({ nombre: "", numero: "", mensaje: "" });
  const [errors, setErrors] = useState<{ nombre?: string; numero?: string; mensaje?: string }>({});
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ ok?: boolean; msg?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!values.nombre.trim()) e.nombre = "Ingresa tu nombre.";
    else if (!nameRegex.test(values.nombre)) e.nombre = "Solo letras y espacios.";
    else if (values.nombre.trim().length > NAME_MAX) e.nombre = `Máximo ${NAME_MAX} caracteres.`;

    if (!values.numero.trim()) e.numero = "Ingresa tu número.";
    else if (!phoneRegex.test(values.numero)) e.numero = "Solo números.";
    else if (values.numero.length !== PHONE_MAX) e.numero = `Debe tener ${PHONE_MAX} dígitos.`;

    if (!values.mensaje.trim()) e.mensaje = "Escribe un mensaje.";
    else if (values.mensaje.length > MSG_MAX) e.mensaje = `Máximo ${MSG_MAX} caracteres.`;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let v = e.target.value;

      if (field === "nombre") {
        if (!nameRegex.test(v)) v = v.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]/g, "");
        v = v.slice(0, NAME_MAX);
      }
      if (field === "numero") {
        v = v.replace(/\D/g, "").slice(0, PHONE_MAX);
      }
      if (field === "mensaje") {
        v = v.slice(0, MSG_MAX);
      }

      setValues((prev) => ({ ...prev, [field]: v }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult({});
    if (!validate() || !formRef.current) return;

    try {
      setSending(true);
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // ⚠️ Reemplaza con tu Service ID
        "YOUR_TEMPLATE_ID", // ⚠️ Reemplaza con tu Template ID
        formRef.current,
        { publicKey: "YOUR_PUBLIC_KEY" } // ⚠️ Reemplaza con tu Public Key
      );
      setResult({ ok: true, msg: "¡Mensaje enviado! Te contactaremos pronto." });
      setValues({ nombre: "", numero: "", mensaje: "" });
      formRef.current.reset();
    } catch (err) {
      setResult({ ok: false, msg: "Ocurrió un error al enviar. Intenta nuevamente." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="bg-white text-[#111] scroll-mt-24 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Columna izquierda */}
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
            ¿Listo para cotizar tu proyecto?
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            {/* Botón llamar (amarillo) */}
            <a
              href="tel:50660161790"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F7931A] text-white px-5 py-3 font-semibold hover:brightness-110 transition"
            >
              <Phone size={20} /> 6016-1790
            </a>

            {/* Botón correo (negro) */}
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-5 py-3 font-semibold hover:bg-black/80 transition"
            >
              <Mail size={20} /> Contáctanos
            </Link>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={values.nombre}
                  onChange={onChange("nombre")}
                  maxLength={NAME_MAX}
                  className={[
                    "mt-1 block w-full rounded-lg border px-3 py-2 text-sm pr-12 outline-none",
                    errors.nombre
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-[#F7931A] focus:ring-[#F7931A]",
                  ].join(" ")}
                  placeholder="Tu nombre"
                  aria-invalid={!!errors.nombre}
                />
                <span
                  className={`absolute bottom-1 right-3 text-xs ${
                    values.nombre.length >= NAME_MAX ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {values.nombre.length}/{NAME_MAX}
                </span>
              </div>
              {errors.nombre && <p className="mt-1 text-xs text-red-600">{errors.nombre}</p>}
            </div>

            {/* Número */}
            <div>
              <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                Número
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="numero"
                  name="numero"
                  value={values.numero}
                  onChange={onChange("numero")}
                  inputMode="numeric"
                  maxLength={PHONE_MAX}
                  className={[
                    "mt-1 block w-full rounded-lg border px-3 py-2 text-sm pr-12 outline-none",
                    errors.numero
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-[#F7931A] focus:ring-[#F7931A]",
                  ].join(" ")}
                  placeholder="Tu número de contacto"
                  aria-invalid={!!errors.numero}
                />
                <span
                  className={`absolute bottom-1 right-3 text-xs ${
                    values.numero.length >= PHONE_MAX ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {values.numero.length}/{PHONE_MAX}
                </span>
              </div>
              {errors.numero && <p className="mt-1 text-xs text-red-600">{errors.numero}</p>}
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <div className="relative">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={values.mensaje}
                  onChange={onChange("mensaje")}
                  maxLength={MSG_MAX}
                  className={[
                    "mt-1 block w-full rounded-lg border px-3 py-2 text-sm pr-12 outline-none resize-none",
                    errors.mensaje
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-[#F7931A] focus:ring-[#F7931A]",
                  ].join(" ")}
                  placeholder="Escribe tu mensaje..."
                  aria-invalid={!!errors.mensaje}
                />
                <span
                  className={`absolute bottom-2 right-3 text-xs ${
                    values.mensaje.length >= MSG_MAX ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {values.mensaje.length}/{MSG_MAX}
                </span>
              </div>
              {errors.mensaje && <p className="mt-1 text-xs text-red-600">{errors.mensaje}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl bg-[#F7931A] text-white font-semibold py-3 hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
            </button>

            {result.msg && (
              <p className={`text-sm ${result.ok ? "text-green-600" : "text-red-600"}`}>
                {result.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
