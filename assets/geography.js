 let elem = document.querySelector('.mover'), 
     div = document.querySelector('.move'), 
     x = 0, 
     y = 0, 
     mousedown = false; 
 div.addEventListener('mousedown', function (e) { 
     mousedown = true; 
     x = div.offsetLeft - e.clientX; 
     y = div.offsetTop - e.clientY; 
     e.preventDefault();
 }, true); 
 document.addEventListener('mouseup', function (e) {
     mousedown = false; 
 }, true); 
 elem.addEventListener('mousemove', function (e) { 
     if (mousedown) { 
         div.style.left = e.clientX + x + 'px'; 
         div.style.top = e.clientY + y + 'px'; 
     } 
 }, true); 
