export const findFirstRecurringCharacter = (input: string): string | null => {
    const charHashMap: { [index: string]: boolean } = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  };
  console.log(findFirstRecurringCharacter)

  //Sendo **n** o tamanho da string `input`, complexidade é
  // O(n)