// run `node index.js` in the terminal

let a = 1;
for (a; a <= 100; a++) {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log("Amazon");
  } else if (a % 3 === 0) {
    console.log("Google");
  } else if (a % 5 === 0) {
    console.log("Facebook");
  } else {
    console.log(a);
  }
}
