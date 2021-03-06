// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (matrix === undefined || matrix.length === 0) {
        return [];
    }

    let emptyArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            emptyArr.push(...matrix[i]);
        } else {
            emptyArr.push(...matrix[i].reverse());
        }
    }
    return emptyArr;
};

