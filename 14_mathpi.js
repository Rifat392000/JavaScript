const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const Tea = {
    name: 'ginger Tea',
    price: 250,
    isAvailable: true,

    orderTea: function(){
        console.log("Tea not available");
    }
}

console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

Object.defineProperty(Tea, 'name', {
    writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(Tea, "name"));

Tea.name="Rifat"

for (let [key, value] of Object.entries(Tea)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}