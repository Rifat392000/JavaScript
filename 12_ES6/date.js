const date = new Date();
console.log(date);
console.log(date.getFullYear(), date.getMonth());
console.log(date.getDate() + ' ' + date.getHours() + ' ' + date.getMinutes());

const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');

if(date1.getTime() < date2.getTime()){
console.log('Date 1 is before Date 2');
}
else{
    console.log('Date 2 is before Date 1');
}