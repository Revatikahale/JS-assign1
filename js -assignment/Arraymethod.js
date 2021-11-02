//1 print 3 * 5 Array

var newArr = new Array(5);

// step-1
for (i = 0; i < 5; i++){
    newArr[i] = new Array(5);
}

// step-2

var start = 21;

for (var i = 0; i < 5; i++){

    for (var j = 0; j < 5; j++){
        newArr[i] [j] = start;
        start = start + 1;
    }
}

console.log("newArr = ", newArr);


// step-3

for(var i = 0; i < 5; i++){
    for(var j = 0; j < 5; j++){
        document.write(newArr[i][j] + "&emsp;");
    }
    document.write("<br/>");
}
