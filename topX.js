const fs = require('fs')
const es = require('event-stream')

const X = 100
const topXArr = []

function prepTopXArr(X, int) {
    if (topXArr.length < X) {
        topXArr.push(int)
    }
}

function manageTopXArr(topXArr, int) {
    for (i = 0; i < topXArr.length; i++) {
        if (int > topXArr[i]) {
            topXArr[i] = int
            topXArr.sort((a,b)=>b-a)
            break
        }
    }
}

var lineNr = 0

var lineStream = fs.createReadStream('data.txt')
    .pipe(es.split())
    .pipe(es.mapSync(function (line) {

        lineStream.pause();

        prepTopXArr(X, line)
        manageTopXArr(topXArr, line)

        lineNr += 1;

        lineStream.resume();
    })
        .on('error', function (err) {
            console.log('Error while reading file.', err);
        })
        .on('end', function () {
            console.log('Read entire file.')
            console.log(topXArr)
        })
    );