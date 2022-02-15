function gameboardFactory (rows, cols) {
    const colsNum = cols.charCodeAt(0) - 65 + 1 // Convert uppercase letter to number
    const size = rows*colsNum

    let matrix = {}
    for (let i = 0; i < colsNum; i++) {
        const letter = String.fromCharCode(65 + i)
        matrix[letter] = {}

        for (let j = 1; j <= rows; j++) {
            matrix[letter][j] = 'empty'
        }
    }

    console.log(matrix)
    return {size, rows, colsNum}
}

module.exports = {
    gameboardFactory
}