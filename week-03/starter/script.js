// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const DESIGN_PRICE = 1_500_000;
const MATERIAL_COST = 500_000;
const AREA_M2 = 35;
const CLIENT_BUDGET = 2_500_000;
const DISCOUNT = 0.10;


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================

console.log("=== Operaciones básicas ===");

const totalCost = DESIGN_PRICE + MATERIAL_COST;
console.log("Costo total del proyecto:", totalCost);

const costPerM2 = totalCost / AREA_M2;
console.log("Costo por metro cuadrado:", costPerM2);

const discountValue = totalCost * DISCOUNT;
console.log("Valor del descuento:", discountValue);

const finalPrice = totalCost - discountValue;
console.log("Precio final con descuento:", finalPrice);

const remainingBudget = CLIENT_BUDGET - finalPrice;
console.log("Presupuesto restante:", remainingBudget);

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================

console.log("=== Asignación compuesta ===");

let projectTotal = 0;

projectTotal += DESIGN_PRICE;
console.log("Después del diseño:", projectTotal);

projectTotal += MATERIAL_COST;
console.log("Después de materiales:", projectTotal);

projectTotal *= 0.9;
console.log("Con descuento aplicado:", projectTotal);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================

console.log("=== Validaciones con === ===");

const isExactPrice = totalCost === 2_000_000;
console.log("¿El costo es exactamente 2.000.000?", isExactPrice);

const isWithinBudget = finalPrice <= CLIENT_BUDGET;
console.log("¿Está dentro del presupuesto?", isWithinBudget);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================

console.log("=== Condiciones lógicas ===");

const hasClient = true;

const canStartProject = hasClient && CLIENT_BUDGET >= finalPrice;
console.log("¿Se puede iniciar el proyecto?", canStartProject);

const needsAdjustment = CLIENT_BUDGET < finalPrice || !hasClient;
console.log("¿Necesita ajustes?", needsAdjustment);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================

console.log("=== Resumen ===");

console.log("Costo total:", totalCost);
console.log("Precio final:", finalPrice);
console.log("Costo por m2:", costPerM2);
console.log("Presupuesto restante:", remainingBudget);

console.log("");