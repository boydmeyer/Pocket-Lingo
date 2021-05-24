import shuffleArray from "./shuffleArray";

/**
 * Populates the wordlist with indexes and answers
 *
 * @param {*} a
 * @returns
 */
const setupWords = (a) => {
    return shuffleArray(addAnswers(addIndexes(a)));
};

/**
 * Adds indexes to the words
 *
 * @param {*} a
 * @returns
 */
const addIndexes = (a) => {
    return a.map((w, i) => {
        return { id: i, ...w };
    });
};

/**
 * Adds answer options to words
 *
 * @param {*} list
 * @returns []
 */
const addAnswers = (wordList, amount = 3) => {
    return wordList.map((currentWord) => {
        return {
            ...currentWord,
            answers: generateAnswers(currentWord, wordList, amount),
        };
    });
};

/**
 * Generates new answers
 *
 * @param {*} word
 * @param {*} list
 * @param {*} amount
 * @returns
 */
const generateAnswers = (word, list, amount) => {
    let answers = [word];
    for (let i = 0; i < amount; i++) {
        let newAnswer = word;
        while (word.id === newAnswer.id || answers.includes(newAnswer)) {
            newAnswer = list[Math.floor(Math.random() * list.length)];
        }
        answers.push(newAnswer);
    }
    return shuffleArray(answers);
};

export default setupWords;
