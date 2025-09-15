// src/layout/footer.tsx
import { Hammer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-300 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo + Derechos */}
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-lg bg-[#F7931A]/10">
            <Hammer className="h-4 w-4 text-[#F7931A]" />
          </span>
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">CARGUE S.A.</span> · Todos
            los derechos reservados
          </p>
        </div>

        {/* Créditos */}
        <p className="text-xs">
          Página web creada por{" "}
          <a
            href="https://visualviewcreations.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-[#F7931A] transition"
          >
            Visual View Creations
          </a>
        </p>
      </div>
    </footer>
  );
}
