const toEncrypt = document.querySelector(".textareaToEncrypt");
const toDecrypt = document.querySelector(".textareaToDecrypt");
const btnEncrypt = document.querySelector(".btnEncrypt");
const btnCopyEncrypt = document.querySelector(".copyEncrypt");
const btnPasteEncrypt = document.querySelector(".pasteEncrypt");
const btnDecrypt = document.querySelector(".btnDecrypt");
const btnCopyDecrypt = document.querySelector(".copyDecrypt");
const btnPasteDecrypt = document.querySelector(".pasteDecrypt");

let textToEncrypt = "";
let textToDecrypt = "";
let encryptedLetters = [];
let encryptResult = "";

toEncrypt.addEventListener("change", () => {
  textToEncrypt = toEncrypt.value;
});

toDecrypt.addEventListener("change", () => {
  textToDecrypt = toDecrypt.value;
});

btnCopyEncrypt.addEventListener("click", () => {
  toEncrypt.select();
  document.execCommand("copy");
});

btnCopyDecrypt.addEventListener("click", () => {
  toDecrypt.select();
  document.execCommand("copy");
});

btnEncrypt.addEventListener("click", () => {
  if (encryptResult === "") {
    startEncrypting();
  } else {
    encryptedLetters = [];
    encryptResult = "";
    startEncrypting();
  }
});

const startEncrypting = () => {
  //   resetResult();
  const encrypting = toEncrypt.value.toLowerCase();
  let encryptingArr = encrypting.split("");
  //   console.log(encryptingArr);
  encryptingArr.forEach(index => {
    const newStr = index => {
      if (index === "a") {
        return index.replace(/a/g, "11");
      } else if (index === "b") {
        return index.replace(/b/g, "12");
      } else if (index === "c") {
        return index.replace(/c/g, "13");
      } else if (index === "d") {
        return index.replace(/d/g, "14");
      } else if (index === "e") {
        return index.replace(/e/g, "15");
      } else if (index === "f") {
        return index.replace(/f/g, "21");
      } else if (index === "g") {
        return index.replace(/g/g, "22");
      } else if (index === "h") {
        return index.replace(/h/g, "23");
      } else if (index === "i") {
        return index.replace(/i/g, "24");
      } else if (index === "j") {
        return index.replace(/j/g, "25");
      } else if (index === "k") {
        return index.replace(/k/g, "31");
      } else if (index === "l") {
        return index.replace(/l/g, "32");
      } else if (index === "m") {
        return index.replace(/m/g, "33");
      } else if (index === "n") {
        return index.replace(/n/g, "34");
      } else if (index === "o") {
        return index.replace(/o/g, "35");
      } else if (index === "p") {
        return index.replace(/p/g, "41");
      } else if (index === "r") {
        return index.replace(/r/g, "42");
      } else if (index === "s") {
        return index.replace(/s/g, "43");
      } else if (index === "t") {
        return index.replace(/t/g, "44");
      } else if (index === "u") {
        return index.replace(/u/g, "45");
      } else if (index === "v") {
        return index.replace(/v/g, "51");
      } else if (index === "w") {
        return index.replace(/w/g, "52");
      } else if (index === "x") {
        return index.replace(/x/g, "53");
      } else if (index === "y") {
        return index.replace(/y/g, "54");
      } else if (index === "z") {
        return index.replace(/z/g, "55");
      } else if (index === " ") {
        return "16";
      }
    };
    encryptedLetters.push(newStr(index));
    console.log(`Tablica encryptedLetters: ${encryptedLetters}`);
    connectEncryptedLetters();
  });
};

const connectEncryptedLetters = () => {
  resetResult();
  encryptResult = encryptedLetters.join("");
  console.log(encryptResult);
  showResult();
};

const showResult = () => {
  toDecrypt.value = encryptResult;
};

const resetResult = () => {
  toDecrypt.value = "";
};
