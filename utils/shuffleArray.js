/**
 * Shuffles array
 *
 * @param {*} r
 * @returns []
 */
const shuffleArray = (r) => {
    let currentIndex = r.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = r[currentIndex];
        r[currentIndex] = r[randomIndex];
        r[randomIndex] = temporaryValue;
    }
    return r;
};

export default shuffleArray;
