import { HelpCircle } from "lucide-react";

export function FAQ() {
  return (
    <section id="faq" className="py-16 px-4 bg-[#FAF9F6] border-t border-[#C6B9A5]/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#C6B9A5]/10 text-[#705E49] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#42362C]">
            Preguntas Frecuentes
          </h2>
          <p className="text-[#8C785C] text-sm">
            Todo lo que necesitas saber sobre nuestras alternativas premium y el proceso de compra.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C6B9A5]/15 hover:border-[#C6B9A5]/30 transition-all">
            <h3 className="font-bold text-[#42362C] text-lg mb-2">¿Son perfumes originales?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No, comercializamos perfumes alternativos inspirados en grandes fragancias mundiales. Las marcas comerciales mencionadas sirven únicamente de guía olfativa para orientarte en tu elección.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C6B9A5]/15 hover:border-[#C6B9A5]/30 transition-all">
            <h3 className="font-bold text-[#42362C] text-lg mb-2">¿Cómo funciona el pedido y despacho en Chile?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Es muy simple: agregas tus alternativas al carrito digital o usas nuestro asesor inteligente, y al presionar "Enviar Pedido", se genera un mensaje formateado y detallado para nuestro operador de WhatsApp. Confirmamos stock de inmediato y realizamos envíos rápidos a todo Chile.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C6B9A5]/15 hover:border-[#C6B9A5]/30 transition-all">
            <h3 className="font-bold text-[#42362C] text-lg mb-2">¿Cuál es la concentración y fijación de sus perfumes?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nuestra colección clásica posee una excelente concentración, mientras que las líneas exclusivas *RED* y *BLACK* están elaboradas con materias primas ultra-premium importadas y alta concentración de aceites esenciales, garantizando una fijación extraordinaria superior a las 8 horas en piel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

