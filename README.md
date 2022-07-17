# Домашка
- [x] Створіть клас **Hamburger**
- [x] В Класі додати в static об'єкт налаштувань по добавкам (не по розміру), щоб була можливість використовувати їх як у прикладі: **Hamburger.stuffing.STUFFING_SALAD**
```
  stuffing: {
    STUFFING_SALAD: {
      type: "STUFFING SALAD",
      price: 300,
      ccal: 200
    },
    STUFFING_POTATO: {
      type: "STUFFING POTATO",
      price: 400,
      ccal: 100
    },
    TOPPING_MAYO: {
      type: "TOPPING MAYO",
      price: 300,
      ccal: 400
    },
    TOPPING_SPICE: {
      type: "TOPPING SPICE",
      price: 500,
      ccal: 700
    },
  }
```
- [ ] Додати метод **addSize** - Додає розмір гамбургера
- [ ] Додати метод **addTopping(Hamburger.stuffing.STUFFING_SALAD, ...)** - Додає добавку до гамбургера. Можна додати декілька добавок при умові, що вони валідні
- [ ] Додати метод **removeTopping(Hamburger.stuffing.STUFFING_SALAD, ...)** - Видалити добавку, при умові, що вона раніше була додана.
- [ ] Додати метод **getStuffing** - геттер, має повернути this.toppings = [....]
- [ ] Додати метод **calculateCalories()** - взнати калорійність гамбургера
- [ ] Додати метод **showError()** - метод, який може показувати 2 помилки - якщо передали невірний розмір або начинка не існує (При видалені або додаванні)
- [ ] Додати в логіку кода розрахунок варстості замовлення в залежності від розміру гамбургера та добавлених начинок.
- [ ] Дані в формі мають рендеритись динамічно (уявіть, що вони приходять з бекенду, тому кількість начинок може мінятьсь. Відповідно, мають змінюватись поля в формі по даним начинкам)
- [ ] Форма має бути інтерактивною, тобто - при виборі кожного пункту - інформація добавляється в блок "Інфо". Після заповнення усіх полів - сабмітимо форму і отримуємо підтвердження замовлення з виводом загальної інформації: вартість замовлення та що було обрано.
