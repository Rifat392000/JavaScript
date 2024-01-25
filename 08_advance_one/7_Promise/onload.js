// The onload event is commonly used in JavaScript to execute a function when a particular resource
// (such as an image, script, or style sheet) has finished loading.
// Here's the basic syntax for using the onload event with various HTML elements

// For Script Elements:

const scriptElement1 = document.createElement('script');
scriptElement1.onload = function() {
    // Code to execute when the script has loaded successfully
    console.log("Script has been loaded successfully");
};
scriptElement1.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
document.body.appendChild(scriptElement1);

// For Image Elements:

const imageElement = document.createElement('img');
imageElement.onload = function() {
    // Code to execute when the image has loaded successfully
    console.log("Image has been loaded successfully");
};
imageElement.src = 'https://images.pexels.com/photos/1162639/pexels-photo-1162639.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
document.body.appendChild(imageElement);


// For Other Elements (e.g., Linking Stylesheets):

const linkElement = document.createElement('link');
linkElement.onload = function() {
    // Code to execute when the stylesheet has loaded successfully
    console.log("Stylesheet has been loaded successfully");
};
linkElement.rel = 'stylesheet';
linkElement.href = 'style.css';
document.head.appendChild(linkElement);


// The onload event handler itself does not take any parameters in the sense that  
// can't directly pass parameters to the function assigned to onload. 
// The function will be called automatically by the browser when the associated resource has finished loading, 
// and the event object will be passed to the function.

const scriptElement2 = document.createElement('script');
scriptElement2.onload = function(event) {
    // 'event' is the event object, but it doesn't typically contain additional parameters.
    console.log(event);
    console.log('Script loaded!');
};
scriptElement2.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
document.body.appendChild(scriptElement2);



// In the example above, the onload event handler function is defined to take one parameter (event). 
// However, the actual onload event doesn't pass custom parameters directly.

// If we need to pass additional data to the event handler, we would usually use closures or other mechanisms.


const scriptElement3 = document.createElement('script');
const customParameter = "some value";

scriptElement3.onload = function() {
    // Inside this function, we can access the 'customParameter' variable.
    console.log('Script loaded with custom parameter:', customParameter);
};

scriptElement3.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
document.body.appendChild(scriptElement3);
