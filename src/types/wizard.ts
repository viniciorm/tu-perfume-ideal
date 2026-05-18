export type WizardAnswers = {
  gender?: "Mujer" | "Hombre" | "Unisex" | "Regalo / no estoy seguro";
  aromaType?: string;
  occasion?: string;
  intensity?: "Ligero" | "Fresco" | "Equilibrado" | "Cálido" | "Intenso";
  hasReference?: "Sí, quiero escribirlo" | "No, quiero ver opciones";
  referenceText?: string;
  format?: string;
};
