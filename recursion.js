//function diyee korlee
function factorial(number){
    var fact = 1;
    for (var i=1; i<=number;i++){
        fact = fact*i;
        
        
    }
    return fact
}
var rahim = factorial(4);
console.log(rahim);

//recursive way teh

function recursive(num){
    if(num==1){
        return 1;
    }
    else{ 
        console.log(num, num-1);
        return num* recursive(num-1)
    }
}

var result = recursive(5);
console.log(result);