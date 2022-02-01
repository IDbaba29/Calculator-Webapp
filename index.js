let display = document.getElementById('display');  // this targets html element with id of display
let buttons = Array.from(document.getElementsByClassName('button')); // targets all html elements with class of button,convert it to an array 

buttons.map( function(button) {  // creates a new array following the function below
    button.addEventListener('click', function(e) { // adds event listener to listen for button clicked
        switch(e.target.innerText){ // targets the event(button) that was clicked
            case 'C':
                display.innerText = '';  // changes display innertext to empty
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText); // this evaluates the expression in the inner text
                } catch {
                    display.innerText = "Error" // displays error if expression cannot be evaluated
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);//if the case is <- button clear text starting from the end of array(-1)
                }
                break;
            default:
                display.innerText += e.target.innerText; // adds the button clicked text to the display inner text
        }
    });
});