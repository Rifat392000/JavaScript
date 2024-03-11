// The spread (...) syntax allows an iterable, such as an array or string

const numbers = [35,745,87,42,14,325,778,89898,1458874,45,12,789,547]

const largest = Math.max(...numbers);

console.log(largest);

const smallest = Math.min(...numbers);

console.log(smallest);



const number2 = [45,46,87,...numbers,87];

numbers.push(1);

number2.push(478);

console.log(numbers);

console.log(number2);