function printSquare(n) {
    let figure = ''
    for (row = 0; row < n; row++) {
        for (col = 0; col < n; col++) {
            figure += '* '
        }
        figure = figure.slice(0, -1)
        figure += '\n'
    }
    console.log(figure)
}

printSquare(5)