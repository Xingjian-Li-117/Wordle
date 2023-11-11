export const boardDefault = (mode) => {
  const rows = mode === 'easy' ? 6 : 5; 
  const columns = mode === 'easy' ? 6 : 7; 

  const board = [];

  for (let i = 0; i < rows; i++) {
    const row = new Array(columns).fill("");
    board.push(row);
  }

  return board;
};

export const generateWordSet = async (mode) => {
  let wordSet;
  let todaysWord;

 
  const wordBankFile = mode === 'easy' ? '/words_easy.txt' : '/words_hard.txt';

  await fetch(wordBankFile)
    .then((response) => response.text())
    .then((result) => {
      console.log("Raw text from file:", result); 
      const wordArr = result.split("\n").map(word => word.trim().toLowerCase());
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);

    });

  return { wordSet, todaysWord };
};







/*

export const boardDefault = () => {
    return [
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""]
    ];
  };

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n")
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
            wordSet = new Set(wordArr)
        });

    return { wordSet, todaysWord };
}

*/
