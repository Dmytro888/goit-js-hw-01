let message;
const ADMIN_PASSWORD = 'jqueryismyjam';

const passwordInput = prompt('введите пароль')



if (passwordInput === null) {
    message = 'Отменено пользователем!';
}
else if (passwordInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать';
}
else {
    message = 'Доступ запрещен, неверный пароль!'
}

alert(message);