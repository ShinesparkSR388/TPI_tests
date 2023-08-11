import { programer, designer, sysadmin } from "./ej-c4.js";

const reg_ = document.querySelector('[register]');
const table_ = document.querySelector('[contents]');

reg_.addEventListener("click", function(){
    const PEOPLE_ = JSON.parse(localStorage.getItem('people')) || [];
    const name_ = document.querySelector('[name_]');
    const last_ = document.querySelector('[last]');
    const age_ = document.querySelector('[age]');
    const weight_ = document.querySelector('[weight]');
    const job_ = document.querySelector('[job]');
    const opts = document.getElementsByTagName('option');
    let jb = job_.options[job_.selectedIndex].value;
    alert(jb);
    const person = {
        name: name_.value,
        last: last_.value,
        age: age_.value,
        weight: weight_.value,
        job: job_.options[job_.selectedIndex].value
    };
    PEOPLE_.push(person);
    localStorage.setItem('people', JSON.stringify(PEOPLE_));
});
const PEOPLE_ = JSON.parse(localStorage.getItem('people')) || [];
const workers = [];
PEOPLE_.forEach(item => {
    let person = null;
    if(item.job == "Programer"){
        person = programer(item.name, item.last, item.age, item.weight, item.job);
    }else if(item.job == "Designer"){
        person = designer(item.name, item.last, item.age, item.weight, item.job);

    }else if(item.job == "Sysadmin"){
        person = sysadmin(item.name, item.last, item.age, item.weight, item.job);

    }
    workers.push(person);
});  

PEOPLE_.forEach(item => {
    const row = document.createElement("div");
    row.classList.add("row","p-3","border-1");
    const col_1 = document.createElement("div");
    col_1.classList.add("col-3", "p-2", "ps-3", "pe-3");
    col_1.textContent = item.name || "null";
    const col_2 = document.createElement("div");
    col_2.classList.add("col-3", "p-2", "ps-3", "pe-3");
    col_2.textContent = item.last;
    const col_3 = document.createElement("div");
    col_3.classList.add("col-2", "p-2", "ps-3", "pe-3");
    col_3.textContent = item.age.toString();
    const col_4 = document.createElement("div");
    col_4.classList.add("col-2", "p-2", "ps-3", "pe-3");
    col_4.textContent = item.weight;
    const col_5 = document.createElement("div");
    col_5.classList.add("col-2", "p-2", "ps-3", "pe-3");
    col_5.textContent = item.job;

    row.appendChild(col_1);
    row.appendChild(col_2);
    row.appendChild(col_3);
    row.appendChild(col_4);
    row.appendChild(col_5);
    table_.appendChild(row);
});
