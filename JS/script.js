let corpo = document.querySelector("main");
corpo.setAttribute("id", "corpo");

function NewsFrame(classe, div_a) {
  const frm = document.createElement("div");
  frm.className = classe;

  const titolo = document.createElement("h3");
  frm.appendChild(titolo);
  const testo = document.createTextNode("TITOLO NEWS");
  titolo.appendChild(testo);

  const link = document.createElement("div");
  link.className = div_a;
  frm.appendChild(link);
  const a = document.createElement("a");
  a.setAttribute("href", "ciao.com");
  a.setAttribute("target", "_blank");
  link.appendChild(a);
  const text_a = document.createTextNode("cliccami");
  a.appendChild(text_a);

  const data = document.createElement("p");
  frm.appendChild(data);
  const text_d = document.createTextNode("gg/mm/aaaa");
  data.appendChild(text_d);

  const corpo = document.getElementById("corpo");
  corpo.appendChild(frm);
}

function TenNews() {
  for (let i = 0; i < 10; i++) {
    NewsFrame("frame", "div_a");
  }
}
TenNews();

let button = document.getElementById("btn");

button.addEventListener("click", function TenMore() {
  TenNews();
});
