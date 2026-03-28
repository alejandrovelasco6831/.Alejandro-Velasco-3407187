// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Diseño de Interiores
// ============================================

const DOMAIN_NAME = "Diseño de Interiores";
const VALUE_LABEL = "proyectos";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Sala moderna", price: 1_500_000, category: "residencial", active: true, designer: "Juan" },
  { id: 2, name: "Oficina ejecutiva", price: 2_000_000, category: "oficina", active: true, designer: "Laura" },
  { id: 3, name: "Cocina integral", price: 1_800_000, category: "residencial", active: false, designer: "Carlos" },
  { id: 4, name: "Local comercial", price: 2_500_000, category: "comercial", active: true, designer: "Ana" },
  { id: 5, name: "Habitación minimalista", price: 1_200_000, category: "residencial", active: true, designer: "Sofía" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0].name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — $${item.price}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo elemento
addItem({ id: 6, name: "Terraza moderna", price: 1_700_000, category: "residencial", active: true, designer: "Luis" });

// Agregar prioritario
addPriorityItem({ id: 0, name: "Proyecto VIP", price: 3_000_000, category: "comercial", active: true, designer: "Admin" });

// Eliminar del medio
removeByIndex(2);

// Eliminar último
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Búsqueda y filtrado ---\n");

const found = findByName("Sala moderna");
console.log("Búsqueda:", found ? formatItem(found) : "No encontrado");

const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);

// Snapshot
const snapshot = [...items, { id: 99, name: "Extra", price: 0, category: "test", active: false }];
console.log("Snapshot creado sin modificar original");

// Transformación
console.log("\n--- Transformación con map ---\n");

const names = items.map(item => item.name);
console.log("Nombres:", names);

const discounted = items.map(item => item.price * 0.9);
console.log("Precios con descuento:", discounted);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);