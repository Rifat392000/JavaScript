 const number = [12,54,87];

//  TypeError: Assignment to constant variable.
//  number = [147,45,88,78];

 number.push(123);
 number[2]=555;
 console.log(number);
 

 const student ={
     name: 'Rifat',
     age: 23,
     gender:'male'
 }
 console.log(student.name);

 student.name ='Maxwell';
 console.log(student.name);


//  Hoisting is JavaScript's default behavior of
//   moving all declarations to the top of the current
//  scope (to the top of the current script or the current function).


