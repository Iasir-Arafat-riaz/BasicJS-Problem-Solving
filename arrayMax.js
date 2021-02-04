var marks = [26,76,87,88,56,90,43,58,66,77,78];
var max = marks[0];
for(var i=0; i<marks.length; i++){
    var element = marks[i];
    if(element>max){
        max=element;
    }  
}
console.log("highest value is",max);