document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("vowel");
  const inputValue = input.value.toLowerCase();

  const vowelCont = (inputValue) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let isVowel = false;

    for (let i = 0; i < vowels.length; i++) {
      if (inputValue.tolo === vowels[i]) {
        isVowel = true;
        break; // Exit the loop early if a vowel is found
      }
    }

    if (isVowel) {
      console.log("this is a vowel");
      const result = document.getElementById("result");
      result.innerText = ` ${inputValue.toUpperCase()} is a  Vowel `;
    } else {
      console.log("this is a consonant");
      const result = document.getElementById("result");
      result.innerText = ` ${inputValue.toUpperCase()} is a consonent `;
    }

    return inputValue;
  };

  vowelCont(inputValue); // Output: "this is a vowel"
});
