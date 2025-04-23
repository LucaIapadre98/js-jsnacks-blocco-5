// #SNACK 1 //
//const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

//console.log(`${names}`);


// #SNACK 2 //
const people = [
    { name: 'Paolo', age: 35 },
    { name: 'Giulia', age: 24 },
    { name: 'Marco', age: 67 }
  ];    
  people.forEach(person => {
    console.log(person.name);
    
  });


  
  // Stampa in console tutti i nomi
  // Risultato: 'Paolo', 'Giulia', 'Marco'

  // #SNACK3 //
  const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

    for(let i = 0; i < numbers.length; i ++){
        numbers[i] = numbers[i] + 1;
    }

//console.log(numbers);


// #SNACK4 //
const posts = [
    { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
    { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
    { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
    { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
];
  
  // Crea un nuovo array coi nomi di tutti gli autori
  // Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

  for (let i = 0; i < posts.length; i++){
    //console.log(posts[i].author);

  }

  // #SNACK5 //
  const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

let evenNums = isEven;
function isEven() {
    for (let i = 0; i < nums.length; i++) {
        currentNumber = nums[i];
        if (nums[i] % 2 == 0){
            console.log(nums[i]);
        }
    }
}
//console.log(isEven());

// #SNACK6 //
const zucchine = [
    { type: 'Napoletana', weight: 10, length: 4 },
    { type: 'Trombetta', weight: 13, length: 16 },
    { type: 'Napoletana', weight: 4, length: 23 },
    { type: 'Trombetta', weight: 11, length: 6 },
    { type: 'Napoletana', weight: 2, length: 17 },
    { type: 'Romana', weight: 5, length: 10 },
    { type: 'Romana', weight: 7, length: 9 },
    { type: 'Trombetta', weight: 3, length: 8 },
    { type: 'Calabrese', weight: 6, length: 27 },
    { type: 'Calabrese', weight: 14, length: 4 },
];
  
  // A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.



const zucchineLunghe = zucchine.filter ((zucchine, length) => zucchine.length >= "15");
console.table(zucchineLunghe);

const zucchineCorte = zucchine.filter ((zucchine, length) => zucchine.length <= "15");
console.table(zucchineCorte);


// #SNACK7 //
const students = [
    {
      id: 1,
      name: 'Marco Lanci',
      age: 32,
      class: '3C'
    },
    {
      id: 2,
      name: 'Mario Banfi',
      age: 34,
      class: '4A'
    },
    {
      id: 3,
      name: 'Luigi Banzi',
      age: 33,
      class: '5B'
    },
];
  
  // Recupera i dati dello studente con id 2
  // Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }


const idPerson = students.find(student => student.id ===  2);
console.log(idPerson);

// #SNACK8 //
const students1 = [
    {
      id: 1,
      name: 'Marco Lanci',
      age: 32,
      class: '3C'
    },
    {
      id: 2,
      name: 'Mario Banfi',
      age: 34,
      class: '4A'
    },
    {
      id: 3,
      name: 'Luigi Banzi',
      age: 33,
      class: '5B'
    },
];
  
  // Recupera la classe dello studente 'Marco Lanci'
  // Risultato: '3C'


const classPerson = students1.find( student => student.class === "3C");
console.log(classPerson);

 
  




  