// src/layout/Header.tsx
export default function Header() {
  return (
    <header className="bg-white/95 border-b border-black/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          {/* Logo + Nombre (SIEMPRE a la izquierda) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/images/logo.jpg"
              alt="CARGUE S.A."
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 rounded-full object-cover"
              loading="eager"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide text-gray-800">
              CARGUE S.A.
            </span>
          </div>

          {/* Eslogan: más pequeño en móvil, izquierda; normal en desktop, derecha */}
          <span className="text-xs sm:text-sm md:text-base text-gray-600 leading-snug text-left sm:text-right max-w-[40ch] sm:max-w-[48ch]">
            Construcción &amp; Movimiento de Materiales
          </span>
        </div>
      </div>
    </header>
  );
}
