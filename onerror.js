// The onerror event occurs when an error happens while loading a resource, such as an image, script, or stylesheet.
//  This event is useful for handling cases where the browser encounters issues fetching or interpreting the
//   resource. Here's a breakdown of when the onerror event might occur:

//Script Loading:

const scriptElement = document.createElement('script');
scriptElement.onerror = function(event) {
    console.error('Error loading script:', event);
};
scriptElement.src = 'https://example.com/nonexistent-script.js';
document.body.appendChild(scriptElement);


// Image Loading:

const imageElement = document.createElement('img');
imageElement.onerror = function(event) {
    console.error('Error loading image:', event);
};
imageElement.src = 'https://example.com/nonexistent-image.jpg';
document.body.appendChild(imageElement);


//Stylesheet Loading

const linkElement = document.createElement('link');
linkElement.onerror = function(event) {
    console.error('Error loading stylesheet:', event);
};
linkElement.rel = 'stylesheet';
linkElement.href = 'https://example.com/nonexistent-style.css';
document.head.appendChild(linkElement);


// In each case, the onerror event handler function is called when an error occurs, 
// and the event object provides information about the error. 
// This information may include details such as the type of error, 
// the URL of the resource that failed to load, and more. 
// It's commonly used for logging errors and providing fallback mechanisms or alternative content 
// when a resource cannot be loaded successfully.