//iteration 1
console.log("I'm ready");
let hacker1 = "Joaquin";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Celina";
console.log(`The navigator's name is ${hacker2}.`);

//iteration2
if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length}.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}.`)
} else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
} else {
    console.log();
}

//iteration3
// J O A Q U I N
let hacker1Alt = '';
for (let i = 0; i < hacker1.length; i++){ //// this one !
    hacker1Alt += hacker1[i] + ' ';
    }
console.log(hacker1Alt.toUpperCase());

// niuqaoJ
let hacker1Reverse = '';
for (let i = hacker1.length-1; i >= 0; i--){
    hacker1Reverse += hacker1[i]; 
}
console.log(hacker1Reverse);

//lexicographic order
if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//BONUS TIME
//Bonus 1 
//et
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum felis nec magna pulvinar dapibus. Integer odio massa, ultricies eget dolor eget, porta varius ligula. In quis dolor et est porttitor efficitur. Nam sagittis dapibus dolor. Nullam id ante non purus consectetur rutrum. Mauris ut tellus sit amet lacus porttitor rutrum. Integer nec sem et est vestibulum condimentum. Etiam vestibulum fringilla malesuada. Mauris vehicula, dui id pharetra dapibus, enim sapien suscipit nulla, nec malesuada odio orci id ligula. Morbi finibus malesuada risus, ac mollis arcu interdum quis.
Nunc eu erat sit amet elit venenatis tempor at eget nibh. Fusce a diam aliquet, accumsan lacus et, commodo erat. Maecenas rutrum ultricies mauris, pharetra venenatis leo venenatis sit amet. Maecenas eget blandit est. Aenean risus ligula, rutrum ac suscipit at, consectetur ut mi. Nunc eget cursus metus. Curabitur viverra metus quis est lacinia, at eleifend lectus lacinia. Praesent gravida justo sit amet ante eleifend finibus. Maecenas cursus augue eu nulla interdum, eget fringilla dolor sagittis. Pellentesque consequat vitae leo eget luctus. Mauris ullamcorper purus enim, sit amet volutpat tortor interdum nec.
Aenean fringilla tellus eu sollicitudin malesuada. Quisque aliquam vitae nisi non laoreet. Suspendisse rhoncus leo lectus, at accumsan nibh egestas a. Nulla ac sapien vitae eros gravida pellentesque. Aliquam non maximus ante. Nunc ac feugiat arcu. Nunc sodales mi sed tortor pulvinar, a suscipit nunc pretium. Fusce bibendum dolor a sapien aliquet egestas.`;

let words = 0;
let etWords = 0;
let onlyWords = lorem.split(" ");

for(let i=0; i < onlyWords.length; i++){
    if(onlyWords[i].includes("\n")){
        words++
    } else if (onlyWords[i] === "et" || onlyWords[i] === "et,"){
        etWords++;
    }
    words++;
}
console.log(words)
console.log(etWords)

//Bonus 2
function palindromo(frase) {
    let letras = /[^A-Za-z0-9]/g;
    let cosa = frase.toLowerCase('').replace(letras, '');
    let longitud = cosa.length;
    for (let i = 0; i < longitud/2; i++) {
      if (cosa[i] !== cosa[longitud - 1 - i]) { 
          return console.log("false");
      }
    } console.log("true");
   }
   
   palindromo("A man, a plan, a canal. Panama");
   palindromo("Amor, Roma");
   palindromo("race car");
   palindromo("stack cats");
   palindromo("step on no pets");
   palindromo("taco cat");
   palindromo("put it up");
   palindromo("Was it a car or a cat I saw?");
   palindromo( "No 'x' in Nixon")
   palindromo( "No es un palíndromo");