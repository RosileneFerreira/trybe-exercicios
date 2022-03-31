// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', link);
function link(e) {
    e.preventDefault();
}

/* outra forma:
HREF_LINK.addEventListener('click', (event) => {
    event.preventDefault();
  }); */

INPUT_CHECKBOX.addEventListener('click', checkbox);
function checkbox(e) {
    e.preventDefault();
}

/* outra forma:
INPUT_CHECKBOX.addEventListener('click', (event) => {
    event.preventDefault();
  }); */

INPUT_TEXT.addEventListener('keypress', letra);

function letra (event) {
    const tecla = event.key;
    if (tecla !== 'a') {
        event.preventDefault();
    }
}
