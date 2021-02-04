var speech = "Bangladesh have many kind of pollution";

var count = 0;
for (var i =0; i<speech.length; i++){
   var chrac = speech[i];
   if (chrac ==" "){
       count++;
   }
}
count++
console.log(count);