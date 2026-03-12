const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //push dc_heroes as a single component 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//concatenating using SPREADS(adv=>can combine multiple arr)
const all_new_heros = [...marvel_heros, ...dc_heros] //gives combined arr

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //converts arr with all el as single el
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh"))  //to convert string to arr
console.log(Array.from({name: "hitesh"})) // interesting =>return an empty arr

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //returnn an arr with given elements