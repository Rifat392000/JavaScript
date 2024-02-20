try{
    console.log('Try block');
console.log(primary); //primary is not defined yet 
console.log(56);
}
catch(e){
    console.log('Catch block');
    console.log(e); //  ReferenceError: primary is not defined
    
}
finally{
    console.log('Finally block');

}