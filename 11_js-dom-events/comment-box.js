// 3
document.getElementById("post").addEventListener("click",()=>{
    const newcomment=document.getElementById("text-input").value
    if(newcomment.trim() !== ""){
        const p= document.createElement('p');
        p.innerText=newcomment;
        document.getElementById("comments").appendChild(p);
        document.getElementById("text-input").value="";
    }else {
        alert("Input invalid");
      }
})