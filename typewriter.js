const sentence = "just keep swimming";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 100);  
};

setTimeout(() => {
  console.log("\n");
}, sentence.length * 100);

