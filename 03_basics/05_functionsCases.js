const array = [0,1,2,3,4,57,78,0,23,45,96]

array.map(function(i){
    console.log(i)
})

array.map(i=>console.log(`Array ${i}`))

const elements = function()
{
 return   array.map(function(i){
        if(i===0){
            return -1
        }
        else
        {
            return i;
        }
    })
}
console.log(elements());



const me ={
    name:'Rifat',
    talk(){
        //under talk function method anonymous function method can access object and now this object is not global 
        setTimeout(()=>console.log(this.name),2000)
    }
}

me.talk()



function Inner(){
    console.log(this)
}

function Outer(callbackFunction,obj){
    callbackFunction.call(obj)
}

Outer(Inner,{name:'Rifat'})



function Rifat(){
    console.log(arguments[0])
}
Rifat(35)