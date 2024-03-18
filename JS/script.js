let corpo = document.querySelector("main");
corpo.setAttribute("id", "corpo");

function NewsFrame(classe, div_a) {
  const frm = document.createElement("div");
  frm.className = classe;

  const titolo = document.createElement("h3");
  frm.appendChild(titolo);
  const testo = document.createTextNode("prova prova sa sa");
  titolo.appendChild(testo);

  const link = document.createElement("div");
  link.className = div_a;
  frm.appendChild(link);

  const corpo = document.getElementById("corpo");
  corpo.appendChild(frm);
}
NewsFrame("frame", "div_a");
