// 1
const red=document.getElementById("red")
    red.onclick = makered

    function makered(){
        document.body.style.backgroundColor="red"
    }
    
    document.getElementById("orange").onclick=orange
    function orange(){
        document.body.style.backgroundColor="orange"
    }

    document.getElementById("purple").onclick = ()=> document.body.style.backgroundColor="purple"
