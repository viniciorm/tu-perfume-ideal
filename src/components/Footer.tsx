export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <h3 className="text-xl font-bold mb-4">Tu Perfume Ideal</h3>
        <p className="text-slate-400 text-sm mb-8">
          Las marcas mencionadas son solo referencias olfativas. Esta tienda vende perfumes alternativos y no representa a las marcas originales ni a Parfums d Parfums como marca oficial.
        </p>
        <div className="mb-8 border-t border-slate-800 pt-8">
          <h4 className="text-white font-semibold mb-2">¿Quieres vender nuestros perfumes?</h4>
          <p className="text-slate-400 text-sm mb-4">
            Únete como socio(a) de Parfums d Parfums, obtén precios mayoristas y comienza tu propio negocio.
          </p>
          <a 
            href="https://parfums.cl/clientes/incorporar?referido=10984051-3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border border-[#C6B9A5] text-[#C6B9A5] hover:bg-[#C6B9A5] hover:text-slate-900 px-6 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            Inscribirme como Socio
          </a>
        </div>
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Tu Perfume Ideal. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
