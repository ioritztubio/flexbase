import { datubasea } from "./datubasea.js";


const base = "https://covers.openlibrary.org/b/id/"

console.log(irudia)
let index = 0

let aldatu = () => {
    let irudia = document.querySelector("#irudia")
    irudia.src = base + datubasea[index % datubasea.length].filename;

    let izenburu = document.querySelector('#izenburua')
    izenburu.value = datubasea[index % datubasea.length].izenburua

    let egilea = document.querySelector('#egilea')
    egilea.value = datubasea[index % datubasea.length].egilea;

    let isbn = document.querySelector('#isbn')
    isbn.value = datubasea[index % datubasea.length].isbn;

    let data = document.querySelector('#data')
    data.value = datubasea[index % datubasea.length].data;

}


let botoiaL = document.querySelector('#botoiaL')
botoiaL.onclick = () => {
    if(index == 0) index = datubasea.length -1;
    else index--;
    aldatu();
}


let botoiaR = document.querySelector('#botoiaR')
botoiaR.onclick = () => {
    index++;
    aldatu();
}

aldatu()