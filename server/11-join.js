const elements = ["Fire", "Air", "Water"];

const separator = "--";
let rtaFinal = "";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}

const elementos = elements.join("--");
console.log("for", rtaFinal);
console.log("Join", elementos);

const title = "Curso de Manipulación de Arrays";
console.log(title.split(" ").join("-").toLocaleLowerCase());
