"use strict";


function StudentArr(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.age = getRandomInt();

    this.Tuition = Tuition;


    all.StudentArr.push(this);

}
all.StudentArr = [];







let formStusent = document.getElementById('formList');

let tableStudent = document.getElementById('tablets');
let studentListArr = ['Email', 'studentNo', 'Tuition'];
let Tuition = document.createElement('TOtal');




function calcTotal() {
    let total = 0;

    for (let index = 0; index < array.length; index++) {
        total = total + array[index].Tuition;

    }
    return total;
}


function preventRefresh(event) {
    event.preventDefault()


}

let clicks = form.addEventListener("click", preventRefresh())

Asac.prototype.render = function() {

}

function renderHeader() {

    let thEl;
    const rowTable = document.createElement('tr');
    for (let i = 0; i < studentListArr.length; i++) {

        thEl.createElement('th');
        rowTable.appendchild(thEl);

        tableStudent.textcontent = studentListArr[i];

    }
}
renderHeader();


let NameTd = document.createElement('td');
rowTable.appendchild(NameTd);
NameTd.textContent = studentListArr[i];

let ageTd = document.createElement('td');
rowTable.appendchild(ageTd);
ageTd.textContent = `student age =${getRandomInt}`;

let idTd = document.createElement('td');
rowTable.appendchild(idTd);
idTd.textContent = `${calcId}`;


let Tuition = document.getElementById('td');
rowTable.appendchild(Tuition);



let
    fucntion calcId() {
        for (let index = 1; index < id.length; index++) {


            let id = 1;
            if (id == name) {
                return (id, name);
            } else { break; }


        }





        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (24 - 18) + 18);
        }