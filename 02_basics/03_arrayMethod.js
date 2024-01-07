// Array map method
let arr1 = [45, 23, 21]

let a1 = arr1.map((value) => {
     return value
  })
  //return new array a1
  console.log(a1,arr1)

let a2 = arr1.map((value, index, array) => {
   console.log(value, index, array)
  return value + index
})
console.log(a2)



// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a3 = arr2.filter((a) => {
  return a < 10
})
//return new array a3
console.log(a3, arr2)



// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func1 = arr3.reduce((h1, h2) => h1 + h2)
console.log(reduce_func1);


// Array reduce method
const reduce_func2 = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func2)
console.log(newarr3)