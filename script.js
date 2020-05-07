function getHistory(){
    return document.getElementById("history-value").textContent;
}
function printHistory(num){
     return document.getElementById("history-value").textContent=num;
}

function getOutput(){
    return document.getElementById("output-value").textContent;
}
 function printOutput(num){
     if(num == ""){
        return document.getElementById("output-value").textContent=num;
     }
     else{
    return document.getElementById("output-value").textContent=getFormatNumber(num);
     };
 }

 function getFormatNumber(num){ 
     if (num =="-") {
         return "";
     }
     var n = Number(num); 
     var value = n.toLocaleString("en");
     return value;
 }

function reverseNumberFormat(num) {
     return Number(num.replace(/,/g,''));   
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == 'clear') {
            printOutput(0);
            printHistory("");
        }
        else if (this.id=='backspace') {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
         else{
             var output = getOutput();
             var history = getHistory();
             if (output =="" && history!="") {
                 if (isNaN(history[history.length-1])) {
                     history=history.substr(0,history.length-1)
                 }
             }
             if (output!="" || history!=""){
                 output = output==""?
                 output:reverseNumberFormat(output); 
                 history = history + output;
                 if (this.id =="=") {
                     var result = eval(history);
                     printOutput(result);
                     printHistory("");
                    }
                    else {
                        history= history+this.id;
                        printHistory(history);
                        printOutput("");
             }

         } 
         
         }
    });
    
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var output =reverseNumberFormat(getOutput());
        if (output!=NaN) {
           output = output+this.id;
           printOutput(output);                
        }
    });
    
}
