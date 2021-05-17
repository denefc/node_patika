const args=process.argv.slice(2);

function area(radio){
let result=radio*Math.PI;
console.log(`Yarıçapı ${radio} olan dairenin alanı:${result.toFixed(2)}`)
}

area(args[0])