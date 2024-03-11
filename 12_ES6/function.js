function add1 (first,second){
    console.log(first+second);
}
add1(10,20);

function add2 (first,second){
    console.log(first+second);
}
add2();

function add3 (first,second){

    if (second === undefined){
        second = 5;
    }
    console.log(first+second);
}

add3(10);


function add4 (first=5,second=7){
    console.log(first+second);
}

add4();

function add5 (first=5,second=7){
    console.log(first+second);
}

add5(10,20);

function add6 (first=5,second=7){
    console.log(first+second);
}

add6(555);

function add7 (first,second=7){
    console.log(first+second);
}

add7(100,20);


function add8 (first,second=7){
    console.log(first+second);
}

add8(100);
