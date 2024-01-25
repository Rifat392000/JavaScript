//Asynchronous means not happening or done at the same time or speed. 
//For example, in computing, asynchronous means having each operation started 
//only after the preceding operation is completed.

function task1(){
    setTimeout(()=>console.log("Task 1"),2000)
}

function task2(){
    setTimeout(()=>console.log("Task 2"),1000)
}

function task3(){
    setTimeout(()=>console.log("Task 3"),500)
}

function task4(){
    setTimeout(()=>console.log("Task 4"),1500)
}

function task5(){
    setTimeout(()=>console.log("Task 5"),8000)
}

function task6(){
    setTimeout(()=>console.log("Task 6"),3000)
}

task1();
task2();
task3();
task4();
task5();
task6();