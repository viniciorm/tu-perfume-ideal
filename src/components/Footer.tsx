export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <h3 className="text-xl font-bold mb-4">Tu Perfume Ideal</h3>
        <p className="text-slate-400 text-sm mb-8">
          Las marcas mencionadas son solo referencias olfativas. Esta tienda vende perfumes alternativos y no representa a las marcas originales ni a Parfums d Parfums como marca oficial.
        </p>
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Tu Perfume Ideal. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
