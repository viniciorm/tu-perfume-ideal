export function FAQ() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-2">¿Son perfumes originales?</h3>
            <p className="text-slate-600">No, vendemos perfumes alternativos. Las marcas mencionadas son solo referencias olfativas para que sepas qué tipo de aroma esperar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-2">¿Cómo compro?</h3>
            <p className="text-slate-600">Selecciona los perfumes que te interesan y presiona "Enviar pedido por WhatsApp". Nos pondremos en contacto contigo para confirmar stock y coordinar el pago y entrega.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-2">¿Cuánto duran los perfumes?</h3>
            <p className="text-slate-600">La duración depende del pH de cada persona y de las notas del perfume (las fragancias dulces y maderosas suelen durar más que las frescas y cítricas).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
