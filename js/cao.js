'use strict';
console.log('cao.js file was loaded');

//3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

function doubleNotNum(str) {
  const rezArr = [];
  // padalinti stringa i masyva
  const arr = str.split('');
  console.log('arr ===', arr);
  // sukti cikla
  arr.forEach((element) => {
    // console.log('element ===', +element);
    if (isNaN(+element)) {
      // raide
      console.log('raide ===', element);
      rezArr.push(element, element);
    } else {
      // skaicius
      console.log('skaicius ===', element);
      rezArr.push(element);
    }
  });
  // tikrinti ar skaicius
  // jei ne skaiciu tai dvigubinam
  console.log('rezArr ===', rezArr);
  let rez = rezArr.join('');
  console.log('rez ===', rez);
}

// doubleNotNum('Pe1tra s1230');

let str1 = 'Pe1traęėį s1230';

let rez = str1.match(/[a-zA-Z]/);
console.log('rez ===', rez);
