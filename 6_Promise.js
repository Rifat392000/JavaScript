function CallbackFunction(callback, errorCallback) {
    let userLeft = false
    let otherStaff = false
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (otherStaff) {
      errorCallback({
        name: 'User busy',
        message: ':<)' 
      })
    } else {
      callback('Callback function fire')
    }

  }

  CallbackFunction(
    value=>console.log(value)
    , obj=>console.log(obj.name+" "+obj.message)
  )




  function PromiseFunction() {
    let userLeft = true
    let otherStaff = false
    return new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left', 
          message: ':('
        })
      } else if (otherStaff) {
        reject({
            name: 'User busy',
            message: ':<)' 
        })
      } else {
        resolve('Promise resolved')
      }
    })
  }

  PromiseFunction()
  .then(value=>console.log(value))
  .catch(obj=>console.log(obj.name+" "+obj.message))




  const p1 = Promise.reject('Error From Promise One');
  const p2 = Promise.resolve(200);
  const p3 = Promise.resolve('Finished');
  

  p1.then(message1 => {
    return p2.then(message2 => {
      return p3.then(message3 => {
        return [message1, message2, message3];
      });
    });
  }).then(messages => {
    console.log(messages);
  });



  Promise.all([p1, p2, p3])
  .then(messages => console.log(messages))
  .catch(error => console.log(error));


  Promise.allSettled([p1, p2, p3]).then(response => {
    console.log(response);
  });

  // [
  //   { status: 'rejected', reason: 'Error From Promise One' },
  //   { status: 'fulfilled', value: 200 },
  //   { status: 'fulfilled', value: 'Finished' }
  // ]
  

Promise.any([p1, p2, p3]).then(response => {
  console.log(response);
});

//200





const recordOne = new Promise((resolve, reject) => {
  resolve('Number 1 Recorded')
})

const recordTwo = new Promise((resolve, reject) => {
  resolve('Number 2 Recorded')
})

const recordThree = new Promise((resolve, reject) => {
  resolve('Number 3 Recorded')
})


Promise.all([
  recordOne,
  recordTwo,
  recordThree
]).then(messages => {
  console.log(typeof messages)
  messages.forEach(v=>console.log(v))
})


Promise.race([
  recordOne,
  recordTwo,
  recordThree
]).then(messages => {
  console.log(typeof messages)
  console.log(messages)
})