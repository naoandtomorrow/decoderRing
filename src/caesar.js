// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!input || typeof input !== "string") {
      return "";
    }
    if (!shift || typeof shift !== "number" || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    shift = ((shift % 26) + 26) % 26;
    
  const inputArray = input.toLowerCase().split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

    function shiftCharacter(char) {
      const index = alphabet.indexOf(char);

      if (index !== -1) {
        let shiftedIndex = index + (encode ? shift : -shift);

        if (shiftedIndex < 0) {
          shiftedIndex += 26;
        } else if (shiftedIndex >= 26) {
          shiftedIndex -= 26;
        }

        return alphabet[shiftedIndex];
      }

      return char;
    }
    const shiftedArray = inputArray.map(shiftCharacter);
    return shiftedArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
