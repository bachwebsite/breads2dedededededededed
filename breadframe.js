// Define a function that takes a URL and a selector as parameters
function breadframe(url, selector) {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();
  // Open a GET request to the URL
  xhr.open("GET", url, true);
  // Set the response type to document
  xhr.responseType = "document";
  // Define a callback function when the request is loaded
  xhr.onload = function() {
    // Check if the status is 200 (OK)
    if (xhr.status === 200) {
      // Get the response document
      var doc = xhr.response;
      // Get the element that matches the selector
      var element = doc.querySelector(selector);
      // Check if the element exists
      if (element) {
        // Get the code content from the element
        var code = element.textContent;
        // Create a new script element
        var script = document.createElement("script");
        // Set the script type to text/javascript
        script.type = "text/javascript";
        // Set the script content to the code
        script.textContent = code;
        // Append the script element to the document body
        document.body.appendChild(script);
      } else {
        // Log an error message if the element is not found
        console.error("Element not found: " + selector);
      }
    } else {
      // Log an error message if the status is not 200
      console.error("Request failed: " + xhr.status);
    }
  };
  // Send the request
  xhr.send();
  // Get the code content from the element
   var code = element.textContent;
    // Encode the code content as a base64 string
   var base64 = btoa(code);
    // Create a data URI scheme that specifies the script type and the base64 string
  var dataURI = "data:text/javascript;base64," + base64;
    // Use the data URI as the source of the iframe
   <iframe src="dataURI" height="200" width="300" title="JavaScript code"></iframe>
}
