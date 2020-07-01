const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button')

let screenvalue = "";

for(items of buttons) {
    items.addEventListener('click' , (e) => {
        buttonText  = e.target.innerText;
        // console.log(buttonText)
        if(buttonText == 'x') {
            buttonText = '*';
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        else if(buttonText == 'C'){
            screenvalue = '';
            screen.value = screenvalue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenvalue);
        }
        else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
    });
};