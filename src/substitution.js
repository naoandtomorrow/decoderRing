// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!input || !alphabet || typeof alphabet !== 'string' || alphabet.length !== 26) {
      return false;
    }

    // Check for duplicate characters in the substitution alphabet
    const alphabetSet = new Set(alphabet);
    if (alphabetSet.size !== alphabet.length) {
      return false;
    }

    const defaultAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    if (encode) {
      const normalizedInput = input.toLowerCase();
      let encodedMessage = '';

      for (let i = 0; i < normalizedInput.length; i++) {
        const char = normalizedInput[i];
        const index = defaultAlphabet.indexOf(char);

        if (index !== -1) {
          encodedMessage += alphabet[index];
        } else {
          encodedMessage += char;
        }
      }

      return encodedMessage;
    } else {
      const normalizedInput = input.toLowerCase();
      let decodedMessage = '';

      for (let i = 0; i < normalizedInput.length; i++) {
        const char = normalizedInput[i];
        const index = alphabet.indexOf(char);

        if (index !== -1) {
          decodedMessage += defaultAlphabet[index];
        } else {
          decodedMessage += char;
        }
      }

      return decodedMessage;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
