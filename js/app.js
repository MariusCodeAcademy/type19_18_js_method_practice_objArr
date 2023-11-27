'use strict';
console.log('app.js file was loaded');

const students = [
  {
    name: 'James',
    gender: 'male',
    age: 25,
    town: 'Vilnius',
    hasCar: true,
    id: 1,
  },
  {
    name: 'Jill',
    gender: 'female',
    age: 28,
    town: 'Kaunas',
    hasCar: true,
    id: 2,
  },
  {
    name: 'Mike',
    gender: 'male',
    age: 18,
    town: 'Kaunas',
    hasCar: false,
    id: 3,
  },
  {
    name: 'Jane',
    gender: 'female',
    age: 22,
    town: 'Klaipeda',
    hasCar: false,
    id: 4,
  },
  {
    name: 'Jannet',
    gender: 'female',
    age: 29,
    town: 'Klaipeda',
    hasCar: true,
    id: 5,
  },
  {
    name: 'Cory',
    gender: 'male',
    age: 30,
    town: 'Siauliai',
    hasCar: true,
    id: 6,
  },
  {
    name: 'Minks',
    gender: 'male',
    age: 19,
    town: 'Siauliai',
    hasCar: false,
    id: 7,
  },
];

// taikomes
const els = {
  studentsList: document.getElementById('students'),
  allStdBtn: document.getElementById('btn1'),
  siauliaiBtn: document.getElementById('btn2'),
  sortBtn: document.getElementById('btn3'),
  townSelectEl: document.getElementById('town'),
};
console.log('els ===', els);

function generateStudHtml(arr) {
  // issivalyti konteineri
  els.studentsList.innerHTML = '';
  // sukurti cikla ir jo viduje
  arr.forEach((studObj) => {
    // sukurti li
    const liEl = document.createElement('li');
    // prideti varda ir miesta
    liEl.textContent = `${studObj.name} is ${studObj.town} yra ${studObj.age} metai`;
    // sukurti ir prideti mygtuka
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('secondary');
    delBtn.addEventListener('click', deleteHandler);
    liEl.append(delBtn);
    // ideti li i ul
    els.studentsList.append(liEl);
  });
}
generateStudHtml(students);

function deleteHandler(event) {
  const elAndKurioPaspausta = event.target;
  console.log('paspaudei delete', elAndKurioPaspausta);
  // li yra tevinis btn elementas
  elAndKurioPaspausta.parentElement.remove();
}

// st4. prie st1 sugeneruoto saraso pridedam mygtuka su textu 'delete'. mygtuka paspaudus istiname ta li el kuriame yra paspaustas mygtukas
