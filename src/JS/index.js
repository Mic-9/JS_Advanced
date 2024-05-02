import "../css/style.css";

let main = document.querySelector("main");
main.setAttribute("id", "corpo");

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
  a.setAttribute("href", data.url);
  a.setAttribute("target", "_blank");
  link.appendChild(a);
  const text_a = document.createTextNode("Learn more");
  a.appendChild(text_a);

  //data

  const GGMMAAAA = new Date(data.time * 1000).toLocaleDateString({
    timeZone: "UTC",
  });
  const time = document.createElement("p");
  frm.appendChild(time);
  const text_d = document.createTextNode(GGMMAAAA);
  time.appendChild(text_d);

  const corpo = document.getElementById("corpo");
  corpo.appendChild(frm);
}
let counter = 0;

//!!!!!!!!!

//!!!!!! RICORDATIIIIII di togliere i 2 console.log

//!!!!!!!!!

function TenMore() {
  fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then((response) => response.json())
    .then((tenId) => {
      console.log(tenId);
      const Ten = tenId.slice(counter, counter + 10);
      console.log(Ten);
      Ten.forEach((tenId) => {
        const singleUrl = `https://hacker-news.firebaseio.com/v0/item/${tenId}.json`;
        fetch(singleUrl)
          .then((response2) => response2.json())
          .then((data) => {
            NewsFrame("classe", "div_a", data);
          })

          .catch((e) => {
            console.error("Errore singolo id:", e);
          });
      });
      counter += 10;
    })
    .catch((e) => {
      console.error("Errore array id:", e);
    });
}

TenMore();

const button = document.getElementById("btn");
button.addEventListener("click", TenMore);

/*
RIPRENDI DAL VIDEO (10) WEBPACK ITALIANO e controlla come importare immagini in js (appendChild)
*/
