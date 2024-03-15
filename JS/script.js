let corpo = document.querySelector("main");
corpo.setAttribute("id", "corpo");

function NewsFrame() {
  const frame = document.createElement("p");
  const testo = document.createTextNode("prova prova sa sa");
  frame.appendChild(testo);

  const corpo = document.getElementById("corpo");
  corpo.appendChild(frame);
}
NewsFrame();
