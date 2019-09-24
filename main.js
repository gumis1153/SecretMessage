let toEncrypt = document.querySelector(".textareaToEncrypt");
let toDecrypt = document.querySelector(".textareaToDecrypt");
let btnEncrypt = document.querySelector(".btnEncrypt");
let btnCopyEncrypt = document.querySelector(".copyEncrypt");
let btnPasteEncrypt = document.querySelector(".pasteEncrypt");
let btnDecrypt = document.querySelector(".btnDecrypt");
let btnCopyDecrypt = document.querySelector(".copyDecrypt");
let btnPasteDecrypt = document.querySelector(".pasteDecrypt");
let btnReset = document.querySelector(".reset");

let textToEncrypt = "";
let textToDecrypt = "";
let encryptedLetters = [];
let decryptedNumbers = [];
let decryptedNumbersArr = [];
let encryptResult = "";
let decryptResult = "";
let decryptedArr = [];

toEncrypt.addEventListener("change", () => {
  textToEncrypt = toEncrypt.value;
});

toDecrypt.addEventListener("change", () => {
  textToDecrypt = toDecrypt.value;
});

btnCopyEncrypt.addEventListener("click", e => {
  e.preventDefault();
  toEncrypt.select();
  document.execCommand("copy");
});

btnCopyDecrypt.addEventListener("click", e => {
  e.preventDefault();
  toDecrypt.select();
  document.execCommand("copy");
});

btnEncrypt.addEventListener("click", e => {
  if (toEncrypt.value !== "") {
    e.preventDefault();
    if (encryptResult === "") {
      startEncrypting();
    } else {
      return null;
    }
  } else return null;
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
  showEncryptResult();
};

const showEncryptResult = () => {
  toDecrypt.value = encryptResult;
};

const resetResult = () => {
  toDecrypt.value = "";
};

btnDecrypt.addEventListener("click", e => {
  if (toDecrypt.value !== "") {
    e.preventDefault();
    if (decryptResult === "") {
      console.log("Rozpoczęto rozszyfrowanie");
      startDecrypting();
    } else {
      return null;
    }
  } else return null;
});

const startDecrypting = () => {
  const decrypting = toDecrypt.value;
  //   console.log(decrypting);
  decryptedNumbers = decrypting.match(/.{1,2}/g);
  //   console.log(decryptedNumbers);
  //   decryptedNumbers.forEach(index => {
  // let number = parseInt(index, 10);
  // decryptedArr.push(number);
  console.log(decryptedNumbers);
  decryptConvert();
  //   });
};

const decryptConvert = () => {
  //   console.log(decryptedArr);

  decryptedNumbers.forEach(index => {
    const newNumber = index => {
      if (index === "11") {
        return index.replace(/11/g, "a");
      } else if (index === "12") {
        return index.replace(/12/g, "b");
      } else if (index === "13") {
        return index.replace(/13/g, "c");
      } else if (index === "14") {
        return index.replace(/14/g, "d");
      } else if (index === "15") {
        return index.replace(/15/g, "e");
      } else if (index === "21") {
        return index.replace(/21/g, "f");
      } else if (index === "22") {
        return index.replace(/22/g, "g");
      } else if (index === "23") {
        return index.replace(/23/g, "h");
      } else if (index === "24") {
        return index.replace(/24/g, "i");
      } else if (index === "25") {
        return index.replace(/25/g, "j");
      } else if (index === "31") {
        return index.replace(/31/g, "k");
      } else if (index === "32") {
        return index.replace(/32/g, "l");
      } else if (index === "33") {
        return index.replace(/33/g, "m");
      } else if (index === "34") {
        return index.replace(/34/g, "n");
      } else if (index === "35") {
        return index.replace(/35/g, "o");
      } else if (index === "41") {
        return index.replace(/41/g, "p");
      } else if (index === "42") {
        return index.replace(/42/g, "r");
      } else if (index === "43") {
        return index.replace(/43/g, "s");
      } else if (index === "44") {
        return index.replace(/44/g, "t");
      } else if (index === "45") {
        return index.replace(/45/g, "u");
      } else if (index === "51") {
        return index.replace(/51/g, "v");
      } else if (index === "52") {
        return index.replace(/52/g, "w");
      } else if (index === "53") {
        return index.replace(/53/g, "x");
      } else if (index === "54") {
        return index.replace(/54/g, "y");
      } else if (index === "55") {
        return index.replace(/55/g, "z");
      } else if (index === "16") {
        return " ";
      }
    };
    decryptedNumbersArr.push(newNumber(index));
    console.log(`Tablica decryptedNumbers to: ${decryptedNumbersArr}`);
    decryptResult = decryptedNumbersArr.join("");
    console.log(decryptResult);
    showDecryptResult();
  });
};

const showDecryptResult = () => {
  toEncrypt.value = decryptResult;
};

btnReset.addEventListener("click", e => {
  e.preventDefault();
  console.log("reset");
  toEncrypt.value = "";
  toDecrypt.value = "";
  textToEncrypt = "";
  textToDecrypt = "";
  encryptedLetters = [];
  decryptedNumbers = [];
  decryptedNumbersArr = [];
  encryptResult = "";
  decryptResult = "";
  decryptedArr = [];
});
