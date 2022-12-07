const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function z(a) {
  setTimeout(a, 1000);
}

function x(y) {
  setTimeout(y, 2000);
}
x(function y() {
  cookies.push(newCookie);
  z(function a() {
    console.log(cookies);
    for (let i = 0; i < cookies.length; i++) {
      var c = cookies[i].name;
      document.body.innerText += c + '\n';
    }
  });
});
// Progression 2: using setTimeout()

//Progression 3: Create a function to creat cookies

// Progression 5: calling function
