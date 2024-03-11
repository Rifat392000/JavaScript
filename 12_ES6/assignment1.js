function array (arr){
    let newArray=[];
    arr.forEach(e=> 
        {
            
            if (e.length %2 === 0) {
                newArray.push(e);
            }
        }
        )

        return newArray;
}

const arr = ['Rahim', 'Karim', 'Niaz', 'Education', 'People'];

console.log(array(arr));