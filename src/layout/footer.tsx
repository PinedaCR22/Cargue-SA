// src/layout/footer.tsx
export default function Footer() {
  return (
    <footer className="mt-10 border-t border-black/10 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-[#4b5563] flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} CARGUE S.A. Todos los derechos reservados.</p>
        <p>
          Tel: <a className="underline hover:opacity-80" href="tel:50660161790">6016-1790</a>
        </p>
      </div>
    </footer>
  );
}
