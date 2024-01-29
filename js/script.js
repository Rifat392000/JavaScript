console.log("Panda Commerce");
document.querySelectorAll('h2').forEach(e=> {
    e.style.color = 'lightblue';
});

document.getElementById("backpack").style.backgroundColor="tomato"

const card=document.getElementsByClassName('card')

for(const i of card){
    i.style.borderRadius="30px";
}

function mybtn(){
    console.log('Buy now nike 360');
}

const m= document.getElementsByClassName('m-3')
for(const i of m){
   i.addEventListener('click', e=>{
   console.log( e.target.parentNode.parentNode.parentNode.parentNode);
   const v=e.target.parentNode.parentNode.parentNode.parentNode
   v.removeChild(e.target.parentNode.parentNode.parentNode)
   })
}

document.getElementById('exampleInputEmail1').addEventListener('keyup',e=>{
    if(e.target.value==="Email")
    {
        document.getElementById('submit-btn').removeAttribute('disabled')
    }
    else{
        document.getElementById('submit-btn').setAttribute('disabled',true)
    }
})

document.getElementById('nike').addEventListener('mouseenter',(e)=>{
console.log(e.target);
e.target.src='images/shoes/shoe-3.png'
})
document.getElementById('nike').addEventListener('mouseout',(e)=>{
    console.log(e.target);
    e.target.src='images/shoes/shoe-2.png'
    })


    document.getElementById('subscribe').addEventListener("dblclick", (event) => {
        event.target.style.backgroundColor='lightyellow';
        
    });


