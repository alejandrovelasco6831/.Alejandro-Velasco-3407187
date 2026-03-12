const DOMAIN_NAME = "Diseño de Interiores";

const itemName = "Sala moderna minimalista";

const itemCategory = "Diseño de sala - estilo moderno";

const itemQuantity = 35;

const isItemAvailable = true;

const pendingDesigner = null;

console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre del proyecto: ${itemName}`);
console.log(`Categoría del diseño: ${itemCategory}`);
console.log(`Área del espacio (m2): ${itemQuantity}`);
console.log(`Proyecto disponible: ${isItemAvailable}`);
console.log("");

console.log("--- Tipos de datos ---");

console.log("typeof itemName: ", typeof itemName);
console.log("typeof itemQuantity: ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("");

console.log("--- Conversiones ---");

const quantityAsText = String(itemQuantity);

console.log("Área como texto:", quantityAsText);
console.log("typeof (convertido):", typeof quantityAsText);
console.log("");

console.log("--- Valor nulo ---");

console.log("Diseñador pendiente:", pendingDesigner);
console.log("typeof null:", typeof pendingDesigner);
console.log("¿Es null?:", pendingDesigner === null);
console.log("");

console.log("===========================");
console.log("FIN DE FICHA DE DISEÑO DE INTERIORES");
console.log("===========================");