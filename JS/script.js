fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
  .then((response) => response.json())
  .then((id) => {
    const ten = [];
    for (let i = 0; i < 10; i++) {
      ten.push(id[i]);
    }
    ten.forEach((tenId) => {
      const singleUrl = `https://hacker-news.firebaseio.com/v0/item/${tenId}.json`;
      fetch(singleUrl)
        .then((response2) => response2.json())
        .then((data) => {
          console.log(data);
          NewsFrame("classe", "div_a", data);
        })

        .catch((e) => {
          console.error("Errore singolo id:", e);
        });
    });
  })
  .catch((e) => {
    console.error("Errore array id:", e);
  });

let corpo = document.querySelector("main");
corpo.setAttribute("id", "corpo");

function NewsFrame(classe, div_a, data) {
  const frm = document.createElement("div");
  frm.className = classe;

  //titolo

  const titolo = document.createElement("h3");
  frm.appendChild(titolo);
  const testo = document.createTextNode(data.title);
  titolo.appendChild(testo);

  //link

  const link = document.createElement("div");
  link.className = div_a;
  frm.appendChild(link);
  const a = document.createElement("a");
  a.setAttribute("href", "ciao.com");
  a.setAttribute("target", "_blank");
  link.appendChild(a);
  const text_a = document.createTextNode("cliccami");
  a.appendChild(text_a);

  //data

  const time = document.createElement("p");
  frm.appendChild(time);
  const text_d = document.createTextNode("gg/mm/aaaa");
  time.appendChild(text_d);

  const corpo = document.getElementById("corpo");
  corpo.appendChild(frm);
}
//function TenNews() {
//for (let i = 0; i < 10; i++) {
//  NewsFrame("frame", "div_a", "data");
//}
//}
//TenNews();

let button = document.getElementById("btn");

//button.addEventListener("click", TenNews);

//perchè adesso funziona ma tutti i text node degli h3 sono undefinede ince di prendere la stringa da data.title?
