'use strict';
console.log('pr1.js file was loaded');

// data

const nowObj = new Date();
console.log('nowObj ===', nowObj);
console.log('+nowObj ===', +nowObj);
console.log('nowObj ===', nowObj.getFullYear());
console.log('nowObj ===', nowObj.getMonth() + 1);
console.log('nowObj ===', nowObj.getDate());
console.log('nowObj ===', nowObj.toISOString());
console.log('nowObj ===', nowObj.toLocaleDateString());
console.log('nowObj ===', nowObj.toLocaleTimeString());

// date.toLocaleString('kalba', {papildomi nustatymai})

const niceDate = nowObj.toLocaleString('lt-LT', {
  timeStyle: 'full',
  dateStyle: 'full',
});
const niceTime = nowObj.toLocaleString('lt-LT', { timeStyle: 'medium' });
console.log('niceDate ===', niceDate);
console.log('niceTime ===', niceTime);

// patalpinti data i <h2 id="date"></h2>
