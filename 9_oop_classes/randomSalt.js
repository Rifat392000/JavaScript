function randomSalt() {
    
  
    // Generate random ASCII characters and concatenate them to form the text
    let randomAsciiText = '';
    for (let i = 0; i < 10; i++) {
      const randomAsciiValue = Math.floor(Math.random() * 128); // ASCII range is 0 to 127
      randomAsciiText += String.fromCharCode(randomAsciiValue);
    }
  
    return randomAsciiText;
  }
  
  
  const randomText = randomSalt();
  
  console.log(randomText);