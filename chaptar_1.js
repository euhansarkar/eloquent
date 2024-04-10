
/**solution 1 for looping a triangle */

let count = 0;
let str = '';

while(count <= 20){
    str += '#'
    console.log(str);
    count++;
}


/**solution 2 for FizzBuzz */

let n = 0;
while(n <= 100){
    if(n % 3 === 0 && n % 5 === 0){
        console.log(`FizzBuzz`)
    }else if(n % 3 === 0){
        console.log(`Fizz`)
    }else if(n % 5 === 0){
        console.log(`Buzz`)
    }
    else{
        console.log(n);
    }
++n;
}


/**solution 3 for ChessBoard */

let strCount = 0;
let highStr = 50;

while(strCount <= highStr){
    let strg = '# '.repeat(highStr);

    if(strCount % 2 === 0){
        strg.trim();
        console.log(' '+strg);
    }else{
        strg.trim();
        console.log(strg + ' ');
    }

    strCount++;
}
