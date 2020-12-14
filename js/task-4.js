let credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt('количество для покупки');
userInput = Number(userInput)
let totalPrice;


if (Number.isNaN(userInput)) {
    console.log('!!!некорректный ввод!!!');
}

else if (userInput === 0) {
    totalPrice = 'Отменено пользователем!'
    console.log(totalPrice);
}

else {
        totalPrice = userInput * pricePerDroid;
        if (totalPrice > credits) {
            console.log('Недостаточно средств на счету!')
        }
        else {
            credits -= totalPrice
            console.log(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`)
        }
    }
 