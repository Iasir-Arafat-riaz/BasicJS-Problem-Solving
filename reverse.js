function reverseStr(str){
    var reverse ="";
    for (var i=0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
        
    }
    return reverse
}
var statement = "there is huge politics";
var forWomen = reverseStr(statement);
console.log(forWomen);