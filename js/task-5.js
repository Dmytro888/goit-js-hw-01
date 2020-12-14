let userInput = prompt('введи страну')

if (userInput === null) {
    console.log('отмена ввода');
}
else {
    String.prototype.firstLetterCaps = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
   
    userInput = userInput.toLowerCase();
 
    let price;

    switch (userInput) {
        case 'китай':
            price = 100;
             userInput = userInput.firstLetterCaps();
            console.log(`Доставка в ${userInput} будет стоить ${price} кредитов`)
            break;
        case 'чили':
            price = 250;
             userInput = userInput.firstLetterCaps();
            console.log(`Доставка в ${userInput} будет стоить ${price} кредитов`)
            break;
        case 'австралия':
            price = 170;
             userInput = userInput.firstLetterCaps();
            console.log(`Доставка в ${userInput} будет стоить ${price} кредитов`)
            break;
        case 'индия':
            price = 80;
             userInput = userInput.firstLetterCaps();
            console.log(`Доставка в ${userInput} будет стоить ${price} кредитов`)
            break;
        case 'ямайка':
            price = 120;
             userInput = userInput.firstLetterCaps();
            console.log(`Доставка в ${userInput} будет стоить ${price} кредитов`)
            break;
        default: alert('В вашей стране доставка не доступна')
    }
}
