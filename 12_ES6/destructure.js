const person= {
    name : "Rafiq",
    age : 25,
    gender : "Male",
    city : "London",
    country : "England",
    occupation : "Software Engineer",

}

const {city, country} = person;

console.log(city);

console.log(country);



const {name,age, gender,occupation} = person;

console.log(name);

console.log(age);

console.log(gender);

console.log(occupation);


const {city:city2,occupation: occupation2} = person;

console.log(occupation2);

console.log(city2);


//

const {car, model, identity} = {car:'Audi', model:'R8', identity: '#64732'};

console.log(car);

console.log(model);

console.log(identity);




const {bus,...rest}={bus:'mercedes', model:'R8', identity: '#64732'};

console.log(bus);

console.log(rest);
