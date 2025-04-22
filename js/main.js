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

console.log(people.name);

  
  // Stampa in console tutti i nomi
  // Risultato: 'Paolo', 'Giulia', 'Marco'

  // #SNACK3 //
  const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

    for(let i = 0; i < numbers.length; i ++){
        numbers[i] = numbers[i] + 1;
    }

console.log(numbers);


// #SNACK4 //
const posts = [
    { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
    { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
    { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
    { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
  ]
  
  // Crea un nuovo array coi nomi di tutti gli autori
  // Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

  for (let i = 0; i < posts.length; i++){
    console.log(posts[i].author);

  }






 
  




  