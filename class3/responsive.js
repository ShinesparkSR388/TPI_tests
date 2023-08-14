const mediaQuery = window.matchMedia('(max-width: 900px)')
//DOM
const row1 = document.querySelector('[row1]');
const row2 = document.querySelector('[row2]');
const col1 = document.querySelector('[col1]');
const col2 = document.querySelector('[col2]');
const fdiv = document.querySelector('[fdiv]');
function response(e) {
  if (e.matches) {
    row2.appendChild(col2);
    col1.classList.remove('col-5');
    col1.classList.add('col-12');
    col2.classList.remove('col-6');
    col2.classList.add('col-12');
    fdiv.classList.remove('justify-content-center');
    fdiv.classList.add('justify-content-start');
    fdiv.classList.add('h-100');
    col1.classList.remove('w-50');
  }
}
mediaQuery.addListener(response)

response(mediaQuery);