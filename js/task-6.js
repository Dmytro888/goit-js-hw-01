let total = 0

while(true) {

    let userInput = prompt('введи число');
    
    if (userInput === null) {
        break;
    }
    userInput = Number(userInput);
   
           
    const notANumber = Number.isNaN(userInput)
    if (notANumber) {
        alert('введено не число')
        continue;
    }
     total += userInput
}
 


alert(`общая сумма ${total}`)