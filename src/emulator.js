export const emulator = {
    StartCashin: function (cb, totalAmount) {
        console.log("Купюроприемник включен.");
        // Эмуляция приема купюр
        let currentAmount = 0;
        document.addEventListener('keypress', function (event) {
            if (event.key === '1') { // Нажатие '1' для эмуляции купюры номиналом 100
                currentAmount += 100;
                cb(currentAmount);
                if (currentAmount >= totalAmount) {
                    emulator.StopCashin();
                }
            }

            if (event.key === '2') { // Нажатие '2' для эмуляции купюры номиналом 200
                currentAmount += 200;
                cb(currentAmount);
                if (currentAmount >= totalAmount) {
                    emulator.StopCashin();
                }
            }
        });
    },
    StopCashin: function () {
        console.log("Купюроприемник выключен.");
        // Логика отключения приема купюр
        document.removeEventListener('keypress', function () {});
    },
    BankCardPurchase: function (amount, cb, display_cb, cardBalance) {
        console.log("Эмуляция банковской транзакции на сумму:", amount);
        // Эмуляция процесса оплаты
        display_cb('Приложите карту');
        setTimeout(() => display_cb('Обработка карты'), 1000);
        setTimeout(() => display_cb('Связь с банком'), 2000);
        setTimeout(() => {
            if (cardBalance >= amount) {    
                display_cb('Транзакция успешна');   
                cb(true);    
            } else {   
                display_cb('Недостаточно средств на карте');   
                cb(false);   
            }   
        }, 3000);
    },
    BankCardCancel: function () {
        console.log("Отмена транзакции.");
        // Логика отмены транзакции
    },
    Vend: function (product_idx, cb) {
        console.log("Выдача продукта с индексом:", product_idx);
        // Эмуляция выдачи напитка
        setTimeout(() => {
            const success = Math.random() > 0.1; // 90% вероятность успеха выдачи напитка
            cb(success);
            if (success) {
                console.log("Продукт успешно выдан.");
            } else {
                console.log("Ошибка выдачи продукта.");
            }
        }, 2000);
    }
};
