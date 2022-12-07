const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
setTimeout(x, 1000);
function x() {
  for (let i = 0; i < 2; i++) {
    var l = cookies[i].name;
    document.body.innerText += l + '\n';
  }
}
// Progression 2: using setTimeout() - use 1000 units for time parameter
setTimeout(y, 2000);
function y() {
  cookies.push(newCookie[0]);
}
//Progression 3: Create a function to creat cookies
// use setTimeout() -- use 2000 units for time parameter

// Progression 4: calling functions
