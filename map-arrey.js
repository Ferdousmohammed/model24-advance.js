let student = [
    {id: 101, name: 'Dipzoll'},
    {id: 102, name: 'OmorSani'},
    {id: 103, name: 'ZayedKhan'},
    {id: 104, name: 'Mousumi'}
]

const neewArrey = [];


let names = student.map(x => x.name);
console.log(names);
let ideys = student.map(c => c.id);
console.log(ideys);
let bigger = student.filter(y => y.id>102);
console.log(bigger);
let biggerOne = student.find(y => y.id > 102 );
console.log(biggerOne);
