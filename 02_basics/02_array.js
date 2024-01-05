const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // array merge using  Spread syntax (...)

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] solve this array problem using depth and if we do not know how many depth we have to go then simply use infinity otherwise 1, 2, 3, and so on
console.log(real_another_array);



console.log(Array.isArray("Rifat"))
console.log(Array.from("Rifat")) // convert to array
console.log(Array.from({name: "Rifat"})) // interesting give us empty array because of key value pairs we must tell which one will be array key or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // make a array