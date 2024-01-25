//Asynchronous means not happening or done at the same time or speed. 
//For example, in computing, asynchronous means having each operation started 
//only after the preceding operation is completed.

function task1(callback){
    setTimeout(()=>{console.log("Task 1"); callback()},2000)
}

function task2(callback){
    setTimeout(()=>{console.log("Task 2"); callback()},1000)
}

function task3(callback){
    setTimeout(()=>{console.log("Task 3"); callback()},500)
}

function task4(callback){
    setTimeout(()=>{console.log("Task 4"); callback()},1500)
}

function task5(callback){
    setTimeout(()=>{console.log("Task 5"); callback()},8000)
}

function task6(callback){
    setTimeout(()=>{console.log("Task 6");console.log(callback);},3000)

}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    task6("Callback Finished");});});});});});



