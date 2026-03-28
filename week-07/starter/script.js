"use strict";

// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Diseño de Interiores
// ============================================

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Diseño de Interiores";
const VALUE_LABEL = "precio";

const items = [
  { id: 1, name: "Sala moderna", category: "residencial", value: 1_500_000, active: true },
  { id: 2, name: "Oficina ejecutiva", category: "oficina", value: 2_000_000, active: true },
  { id: 3, name: "Cocina integral", category: "residencial", value: 1_800_000, active: false },
  { id: 4, name: "Local comercial", category: "comercial", value: 2_500_000, active: true },
  { id: 5, name: "Habitación minimalista", category: "residencial", value: 1_200_000, active: true }
];


// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (item) => {
  return `🏠 ${item.name} — ${item.category} — Precio: ${item.value}`;
};


// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calculateValue = (baseValue, factor = 1) => {
  return baseValue * factor;
};


// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const isValid = (item) => {
  return item.active === true;
};


// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, currency = "$") => {
  return `${label}: ${currency}${value}`;
};


// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos.");
} else {

  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;

  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;

  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }

  console.log(`\n✅ Elementos válidos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;

  for (const item of items) {
    totalValue += calculateValue(item.value);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);