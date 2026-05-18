import { CATEGORIES } from "../data/categories";
import { WizardAnswers } from "../types/wizard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface GuidedWizardProps {
  answers: WizardAnswers;
  onChange: (answers: WizardAnswers) => void;
  onComplete: () => void;
}

export function GuidedWizard({ answers, onChange, onComplete }: GuidedWizardProps) {
  // Simple steps based on missing answers
  const updateAnswer = (key: keyof WizardAnswers, value: any) => {
    onChange({ ...answers, [key]: value });
  };

  if (!answers.gender) {
    return (
      <WizardStep 
        title="¿Para quién buscas el perfume?"
        options={CATEGORIES.genders}
        onSelect={(val) => updateAnswer("gender", val)}
      />
    );
  }

  if (!answers.aromaType) {
    return (
      <WizardStep 
        title="¿Qué tipo de aroma prefieres?"
        options={CATEGORIES.aromaTypes}
        onSelect={(val) => updateAnswer("aromaType", val)}
      />
    );
  }

  if (!answers.occasion) {
    return (
      <WizardStep 
        title="¿Cuándo lo usarías?"
        options={CATEGORIES.occasions}
        onSelect={(val) => updateAnswer("occasion", val)}
      />
    );
  }

  if (!answers.intensity) {
    return (
      <WizardStep 
        title="¿Qué intensidad buscas?"
        options={CATEGORIES.intensities}
        onSelect={(val) => updateAnswer("intensity", val)}
      />
    );
  }

  if (!answers.hasReference) {
    return (
      <WizardStep 
        title="¿Tienes un perfume de referencia?"
        options={["Sí, quiero escribirlo", "No, quiero ver opciones"]}
        onSelect={(val) => updateAnswer("hasReference", val)}
      />
    );
  }

  if (answers.hasReference === "Sí, quiero escribirlo" && answers.referenceText === undefined) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border text-center max-w-lg mx-auto">
        <h3 className="text-xl font-bold text-primary mb-6">Escribe el perfume que buscas o que te gusta</h3>
        <Input 
          autoFocus
          className="mb-4"
          placeholder="Ej: Good Girl, Sauvage..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              updateAnswer("referenceText", e.currentTarget.value);
            }
          }}
          onBlur={(e) => {
            if (e.currentTarget.value) {
              updateAnswer("referenceText", e.currentTarget.value);
            }
          }}
        />
        <Button onClick={() => updateAnswer("referenceText", "")} variant="outline" className="w-full">
          Saltar
        </Button>
      </div>
    );
  }

  if (!answers.format) {
    return (
      <WizardStep 
        title="¿Qué formato prefieres?"
        options={CATEGORIES.formats}
        onSelect={(val) => {
          updateAnswer("format", val);
          setTimeout(onComplete, 100);
        }}
      />
    );
  }

  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-lg font-medium text-slate-600">Buscando tus mejores opciones...</p>
    </div>
  );
}

function WizardStep({ title, options, onSelect }: { title: string, options: string[], onSelect: (val: string) => void }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border text-center max-w-lg mx-auto animate-in fade-in zoom-in duration-300">
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">{title}</h3>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <Button 
            key={opt} 
            variant="outline" 
            className="h-14 text-lg justify-start px-6 font-normal hover:border-primary hover:bg-slate-50 transition-colors"
            onClick={() => onSelect(opt)}
          >
            {opt}
          </Button>
        ))}
      </div>
    </div>
  );
}
