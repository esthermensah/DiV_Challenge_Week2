/* Author : Esther Dzifa Mensah 
Date : 25/05/2020

*/

 
function iterate() {
    var message = [];
    for (var i = 0; i <=15; i++) {
    if (i % 2==0) {
     var info = "\n" + i.toString() + " is an even number";
    }else {
      var info = "\n" + i.toString() + " is an odd number";
    }    
    message.push(info);
}
    return message.toString().replace(',','');
    
}

console.log(iterate());
