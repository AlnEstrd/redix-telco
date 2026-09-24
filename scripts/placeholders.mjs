import { business } from "../site.config.mjs";

// Un valor entre [corchetes] es un marcador que falta reemplazar con el dato real.
export function findPlaceholders() {
  return Object.entries(business)
    .filter(([, value]) => /^\[.*\]$/.test(value))
    .map(([key, value]) => ({ key, value }));
}
