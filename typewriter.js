const sentence = "hello there from lighthouse labs";


// can be like this
for (let i = 0; i < sentence.length; i++) {
  if (i + 1 === sentence.length) {      // i + 1 is at the index of the last character
    setTimeout (() => {
      console.log("\n")
    }, 250 * sentence.length);
  };
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 250 * i)
};


// // OR this
// for (let i = 0; i < sentence.length; i++) {
//   if (i + 1 === sentence.length) {
//     setTimeout(() => {
//       process.stdout.write(`${sentence[i]}`);
//       console.log("\n");
//     }, 250 * i)
//   } else {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, 250 * i)
// }
// };