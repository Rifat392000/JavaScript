const data = {
    count : 5000,
    data : [
        {
            name : "Rifat",
            age : 24,
            brands: {
                car : { name : "Audi" , price : 250000 , type : "S"}
            }
        },
        {
            name : "Alif",
            age : 37,

            drive(){
                return 'I love to buy a new car';
            }
        },
    ]
}

console.log(data.data[0]?.brands?.car?.price);

console.log(data.data[1]?.brands?.car?.price);

console.log(data.data[1].drive?.());



const arr = [1,3,5,7,9].map(val=> val+1);

console.log(arr);




const alien ={

    name : 'Saran',
    types: 'js',
    laptop:{
        color: 'blue',
        price: 1000000,
        ram: 4,
        hdd: 500
    }
}

for(let key in alien){
    console.log(key, alien[key]);
}

for(let key in alien.laptop){
    console.log(alien.laptop[key]);
}