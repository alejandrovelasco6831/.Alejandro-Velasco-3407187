// ============================================
// PROYECTO SEMANA 05: Clasificador
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const elementName = "Sala moderna minimalista";
const elementStatus = "active";
const elementValue = 85; // nivel de avance del proyecto (%)
const elementType = "residencial";
const elementInfo = {
  detail: "Diseño de sala con estilo moderno y acabados de lujo",
  location: "Bogotá"
};


// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;

if (elementValue >= 80) {
  classification = "Proyecto avanzado";
} else if (elementValue >= 50) {
  classification = "Proyecto en proceso";
} else {
  classification = "Proyecto inicial";
}


// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";


// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "residencial":
    typeLabel = "Diseño residencial";
    break;
  case "comercial":
    typeLabel = "Diseño comercial";
    break;
  case "oficina":
    typeLabel = "Diseño de oficina";
    break;
  default:
    typeLabel = "Tipo desconocido";
}


// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";


// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.location ?? "Ubicación no especificada";


// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Ubicación: ${safeProperty}`);

console.log("=".repeat(40));