//declaring main variables JS

var form = document.forms['calcForm'];
var input = form.getElementsByTagName('input');
var clearButton = document.getElementsByClassName('clearBtn')[0];
var resultButton = document.getElementsByClassName('resultBtn')[0]; // why array?


//declaring main variables with jQuery


//eventHandler

for(var i =0; i <input.length; i++) {
    
    if(input[i].value != '=' && input[i].value != 'c') {
        input[i].onclick = function() {
            calculate(this.value);
        }
    }
}

function calculate(value) {
    if(form['result'].value == 0) {
        form['result'].value == '';
    }
    
    inp['result'].value += value;
}