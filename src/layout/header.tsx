// src/layout/header.tsx
export default function Header() {
  return (
    <header className="bg-white border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Reemplaza por tu logo si lo deseas */}
          <div className="h-10 w-10 rounded-full bg-[#F7931A]" />
          <span className="font-extrabold tracking-wide">CARGUE S.A.</span>
        </div>
        <span className="text-sm text-[#4b5563]">Construcción & Movimiento de Materiales</span>
      </div>
    </header>
  );
}
