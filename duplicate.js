var nam = [3,5,6,8,3,6,8,7,8,9,3,6,9,11,2,22,12,2,33,2,5,6,4,3,7,8,9];
var uniqueName =[];
for (var i=0; i<nam.length;i++){
    var element = nam[i];
    var searchIndex =uniqueName.indexOf(element);
    if(searchIndex==-1){
        uniqueName.push(element);
    }
}
console.log(nam,uniqueName);