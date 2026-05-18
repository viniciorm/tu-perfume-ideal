import { useState } from "react";
import { BookOpen, Award, Compass, Wind, Layers } from "lucide-react";
import { Button } from "./ui/button";

interface AromaItem {
  code: string;
  name: string;
  brand: string;
  tagline: string;
  intro: string;
  family: string;
  salida: string[];
  corazon: string[];
  fondo: string[];
  tip: string;
  character: string[];
}

export function AromaBlog() {
  const [selectedAroma, setSelectedAroma] = useState<string>("Q05");

  const articles: AromaItem[] = [
    {
      code: "Q05",
      name: "Q-05 Baccarat Rouge",
      brand: "Maison Francis Kurkdjian",
      tagline: "El enigma dorado de la alta perfumería",
      intro: "Baccarat Rouge 540 ha revolucionado la perfumería mundial. No es solo un perfume, es una firma molecular que baila entre la piel y el aire con una estela inconfundible y magnética.",
      family: "Oriental - Frutal",
      salida: ["Frambuesa jugosa", "Naranja amarga", "Azafrán de Irán"],
      corazon: ["Jazmín de Egipto", "Flor de Heliotropo", "Flores transparentes"],
      fondo: ["Musgo de roble", "Caramelo tostado", "Madera de Sándalo"],
      tip: "Su magia radica en la proyección molecular: puede que tú dejes de olerlo por fatiga olfativa, pero quienes te rodean seguirán percibiendo un velo dulce-resinoso de lujo durante más de 12 horas.",
      character: ["Sofisticado", "Magnético", "Eterno"]
    },
    {
      code: "Q03",
      name: "Q-03 Love Don't Be Shy",
      brand: "By Kilian",
      tagline: "Dulces caricias de malvavisco y azahar",
      intro: "Famoso por ser el perfume favorito de celebridades mundiales, es un elixir dulce y goloso. Evoca la inocencia de un primer amor combinado con una sensualidad desbordante.",
      family: "Floral - Oriental",
      salida: ["Nerolí de Túnez", "Bergamota de Calabria", "Pimienta Rosa"],
      corazon: ["Flor de Naranjo dulce", "Jazmín Sambac", "Rosa de Damasco"],
      fondo: ["Azúcar de Vainilla", "Caramelo tibio", "Almizcles sedosos"],
      tip: "Ideal para citas y climas fríos. Aplícalo detrás de las orejas y en las muñecas; el calor corporal potenciará la nota de malvavisco caramelizado de forma afrodisíaca.",
      character: ["Ultra-Dulce", "Sensual", "Adorable"]
    },
    {
      code: "Q51",
      name: "Q-51 Santal 33",
      brand: "Le Labo",
      tagline: "El espíritu libre del oeste americano",
      intro: "Santal 33 es un perfume icónico que captura la esencia del hombre y la mujer libre. Un aroma intelectual que huele a maderas nobles, cuero suave y papiro recién cortado.",
      family: "Amaderado - Floral",
      salida: ["Cardamomo picante", "Lirio de los valles fresco"],
      corazon: ["Sándalo de Australia", "Flor de Iris polvosa"],
      fondo: ["Azafrán dorado", "Cypriol ahumado", "Maderas secas"],
      tip: "Su personalidad es puramente unisex e intelectual. Es perfecto como perfume firma diario para oficinas o estudios creativos donde desees destacar con clase.",
      character: ["Intelectual", "Diferente", "Unisex"]
    },
    {
      code: "Q52",
      name: "Q-52 Ombré Leather",
      brand: "Tom Ford",
      tagline: "La belleza salvaje del cuero negro táctil",
      intro: "Inspirado en el corazón del desierto del oeste, esta fragancia es una oda al cuero táctil. Un aroma denso, misterioso y sumamente elegante para personas de carácter decidido.",
      family: "Amaderado - Cuero",
      salida: ["Frambuesa silvestre", "Iris empolvado", "Gamuza suave"],
      corazon: ["Pachulí noble", "Azafrán", "Cedro de Virginia"],
      fondo: ["Vainilla negra", "Musgo", "Cuero negro ahumado"],
      tip: "Combínalo con ropa de cuero, abrigos elegantes o tenidas negras de noche. Se proyecta increíble en las noches de otoño e invierno.",
      character: ["Imponente", "Rústico-Elegante", "Nocturno"]
    },
    {
      code: "Q01",
      name: "Q-01 English Pear & Freesia",
      brand: "Jo Malone",
      tagline: "Un paseo dorado por la campiña inglesa",
      intro: "Captura la frescura jugosa de las peras maduras inglesas justo en el momento de la cosecha. Envuelto en un bouquet sutil de flores blancas para una elegancia fresca y natural.",
      family: "Floral - Frutal",
      salida: ["Ruibarbo verde", "Pera crujiente", "Limón amarillo"],
      corazon: ["Peonía suave", "Freesia blanca", "Lirio de los valles"],
      fondo: ["Driftwood (Madera flotante)", "Pachulí ligero", "Almizcle limpio"],
      tip: "Es el aroma del optimismo y la limpieza sofisticada. Funciona de manera excelente para bodas de día, eventos de primavera y uso cotidiano de oficina.",
      character: ["Fresco", "Luminoso", "Delicado"]
    },
    {
      code: "Q54",
      name: "Q-54 Aventus Edp",
      brand: "Creed",
      tagline: "El rey indiscutido del éxito masculino",
      intro: "Creado para conmemorar el poder, la visión y el éxito. Aventus combina de forma magistral la dulzura fresca de la piña con el ahumado rústico del abedul y el pachulí.",
      family: "Amaderado - Frutal",
      salida: ["Piña madura", "Bergamota jugosa", "Pimienta Negra", "Manzana"],
      corazon: ["Jazmín exótico", "Abedul ahumado", "Madera de Cedro"],
      fondo: ["Pachulí terroso", "Musgo de roble", "Maderas ambaradas"],
      tip: "Es considerado el perfume masculino más halagado de la historia. Perfecto para reuniones de negocios clave o cuando requieras proyectar liderazgo absoluto.",
      character: ["Poderoso", "Masculino", "Triunfador"]
    }
  ];

  const currentAroma = articles.find((a) => a.code === selectedAroma) || articles[0];

  return (
    <section id="blog-aromas" className="my-16 max-w-6xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#C6B9A5]/10 text-[#705E49] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          El Rincón de los Aromas
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#42362C]">
          Secretos de la Pirámide Olfativa
        </h2>
        <p className="text-[#8C785C] text-sm md:text-base">
          Aprende a decodificar las notas de salida, corazón y fondo de las fragancias premium de Parfums de Parfums y conviértete en un experto.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* SIDEBAR SELECTOR */}
        <div className="lg:col-span-4 space-y-2 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
          {articles.map((art) => (
            <button
              key={art.code}
              onClick={() => setSelectedAroma(art.code)}
              className={`w-full p-4 text-left rounded-xl border transition-all flex items-center justify-between ${
                selectedAroma === art.code
                  ? "bg-[#42362C] border-[#42362C] text-white shadow-md"
                  : "bg-white hover:bg-[#FAF9F6] border-[#C6B9A5]/20 text-[#42362C]"
              }`}
            >
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                  {art.brand}
                </div>
                <div className="font-bold text-sm md:text-base mt-0.5">{art.name}</div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-md font-semibold ${
                selectedAroma === art.code
                  ? "bg-white/20 text-white"
                  : "bg-[#C6B9A5]/10 text-[#705E49]"
              }`}>
                {art.code}
              </span>
            </button>
          ))}
        </div>

        {/* DETALLE ARTÍCULO / PIRÁMIDE */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-[#C6B9A5]/20 p-6 md:p-8 flex flex-col justify-between shadow-sm">
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#8C785C] uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>{currentAroma.family}</span>
                <span>•</span>
                <Layers className="w-3.5 h-3.5" />
                <span>Colección Exclusiva</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#42362C]">
                {currentAroma.name}
              </h3>
              <p className="text-sm font-serif-luxury italic text-[#8C785C] mt-1 font-medium">
                "{currentAroma.tagline}"
              </p>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {currentAroma.intro}
            </p>

            {/* PIRÁMIDE OLFATIVA INTERACTIVA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {/* Notas de Salida */}
              <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/20 relative group hover:bg-amber-50 transition-all">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <Wind className="w-4 h-4 text-amber-600" />
                  Salida (0-30 min)
                </div>
                <ul className="space-y-1.5">
                  {currentAroma.salida.map((note) => (
                    <li key={note} className="text-xs text-slate-700 font-medium list-disc list-inside">
                      {note}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-slate-400 mt-3 leading-snug">
                  La primera impresión efímera y chispeante al vaporizar.
                </p>
              </div>

              {/* Notas de Corazón */}
              <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-200/20 relative group hover:bg-rose-50 transition-all">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <Layers className="w-4 h-4 text-rose-600" />
                  Corazón (1-4 horas)
                </div>
                <ul className="space-y-1.5">
                  {currentAroma.corazon.map((note) => (
                    <li key={note} className="text-xs text-slate-700 font-medium list-disc list-inside">
                      {note}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-slate-400 mt-3 leading-snug">
                  El alma de la fragancia, define su verdadera identidad.
                </p>
              </div>

              {/* Notas de Fondo */}
              <div className="p-4 rounded-xl bg-purple-50/40 border border-purple-200/20 relative group hover:bg-purple-50 transition-all">
                <div className="flex items-center gap-2 text-purple-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4 text-purple-600" />
                  Fondo (4-12+ horas)
                </div>
                <ul className="space-y-1.5">
                  {currentAroma.fondo.map((note) => (
                    <li key={note} className="text-xs text-slate-700 font-medium list-disc list-inside">
                      {note}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-slate-400 mt-3 leading-snug">
                  Las notas más densas y fijadoras que permanecen en tu piel.
                </p>
              </div>
            </div>

            {/* CONSEJO DE EXPERTO */}
            <div className="p-4 bg-[#FAF9F6] border border-[#C6B9A5]/30 rounded-xl">
              <span className="text-xs font-bold text-[#705E49] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Compass className="w-3.5 h-3.5" />
                Consejo del Experto Parfums
              </span>
              <p className="text-xs md:text-sm text-[#42362C] leading-relaxed">
                {currentAroma.tip}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 items-center justify-between border-t border-slate-100 pt-6">
            <div className="flex gap-1.5">
              {currentAroma.character.map((char) => (
                <span key={char} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                  {char}
                </span>
              ))}
            </div>
            <a href="#mapa-olfativo">
              <Button size="sm" className="bg-[#42362C] hover:bg-[#705E49] text-white rounded-full">
                Buscar en el Mapa Olfativo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
